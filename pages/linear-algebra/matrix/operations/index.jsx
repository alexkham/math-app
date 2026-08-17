// // // // tables-optimized: v4 | 2026-05-20 | 4 tables (obj6 aggregation, obj7 comparison, obj11 aggregation, obj12 summary capstone)

// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import '../../../pages.css'
// // // import Head from 'next/head'
// // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // import { tableHeaders } from '@/app/styles/theme'


// // // export async function getStaticProps(){
// // // const keyWords = [
// // //   'matrix operations',
// // //   'matrix addition',
// // //   'matrix multiplication',
// // //   'matrix transpose',
// // //   'scalar multiplication matrix',
// // //   'matrix multiplication rules',
// // //   'matrix multiplication not commutative',
// // //   'matrix powers',
// // //   'elementary matrices',
// // //   'matrix decomposition',
// // //   'matrix product dimensions',
// // //   'transpose properties',
// // //   'linear combination matrices',
// // //   'LU decomposition',
// // //   'matrix arithmetic linear algebra'
// // // ]

// // //   const linkStyle = 'color: inherit; text-decoration: underline;'

// // //   // ---------- TABLES ----------

// // //   // obj6 — aggregation: matrix multiplication properties (with failures)
// // //   const obj6Table = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.aggregation}">Property</th>
// // //       <th style="${tableHeaders.aggregation}" >Status</th>
// // //       <th style="${tableHeaders.aggregation}">Identity / note</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Associativity</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">holds</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(AB)C = A(BC)</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Left distribution</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">holds</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A(B + C) = AB + AC</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Right distribution</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">holds</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(A + B)C = AC + BC</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar passage</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">holds</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">c(AB) = (cA)B = A(cB)</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Identity</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #27ae60; text-align: center; font-weight: bold;">holds</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">AI = IA = A</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commutativity</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">fails</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">AB ≠ BA in general</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero-product law</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #e74c3c; text-align: center; font-weight: bold;">fails</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">AB = O can occur with A ≠ O and B ≠ O</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Cancellation</td>
// // //       <td style="padding: 12px 15px; color: #e74c3c; text-align: center; font-weight: bold;">fails</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">AB = AC ⇏ B = C unless A is <a href="/linear-algebra/matrix/inverse" style="${linkStyle}">invertible</a></td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // obj7 — comparison: four interpretations of matrix multiplication
// // //   const obj7Table = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.comparison}">Interpretation</th>
// // //       <th style="${tableHeaders.comparison}">Building block</th>
// // //       <th style="${tableHeaders.comparison}">Formula for AB</th>
// // //       <th style="${tableHeaders.comparison}">When it shines</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Entry-by-entry</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scalar (i, j) entries</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(AB)ᵢⱼ = Σₖ aᵢₖ bₖⱼ</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">hand computation, definition</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column view</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns of B</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">column j of AB = A · bⱼ</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">link to <a href="/linear-algebra/transformations" style="${linkStyle}">linear transformations</a></td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row view</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rows of A</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row i of AB = aᵢ · B</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/matrix/rank" style="${linkStyle}">rank</a>, row reduction</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Outer product sum</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">rank-1 matrices</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">AB = Σₖ (col k of A)(row k of B)</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">low-rank approximation, SVD</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // obj11 — aggregation: matrix decompositions catalog
// // //   const obj11Table = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.aggregation}">Decomposition</th>
// // //       <th style="${tableHeaders.aggregation}">Form</th>
// // //       <th style="${tableHeaders.aggregation}">Requires</th>
// // //       <th style="${tableHeaders.aggregation}">Primary use</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">LU</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LU (L lower, U upper triangular)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any square matrix (with pivoting)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solving Ax = b for many right-hand sides</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">QR</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = QR (Q orthogonal, R upper triangular)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any matrix</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">least squares, eigenvalue algorithms</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cholesky</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LLᵀ</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/matrix/types" style="${linkStyle}">symmetric</a> positive definite</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">half-cost LU for SPD systems</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Eigendecomposition</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = PDP⁻¹ (D diagonal)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonalizable square matrix</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matrix powers, spectral analysis</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">SVD</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">A = UΣVᵀ (U, V orthogonal; Σ diagonal ≥ 0)</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">any matrix of any shape</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">rank, fundamental subspaces, best low-rank approximation</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // obj12 — summary capstone: all operations + dimension and structure
// // //   const summaryTable = `
// // // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// // //   <thead>
// // //     <tr>
// // //       <th style="${tableHeaders.summary}">Operation</th>
// // //       <th style="${tableHeaders.summary}">Input requirement</th>
// // //       <th style="${tableHeaders.summary}">Result size</th>
// // //       <th style="${tableHeaders.summary}">Key property</th>
// // //     </tr>
// // //   </thead>
// // //   <tbody>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition / subtraction</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B both m × n</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative; additive identity O</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar multiplication</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n; c any scalar</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributes over both matrix and scalar sum</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear combination</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all Aᵢ same m × n shape</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">turns m × n matrices into a <a href="/linear-algebra/vector-spaces" style="${linkStyle}">vector space</a> of dimension mn</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Matrix multiplication</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n, B is n × p &nbsp;(inner dims match)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × p</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">associative, NOT commutative; inner dim consumed</td>
// // //     </tr>
// // //     <tr style="background: #f8f9fa;">
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Transpose</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n (no other restriction)</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n × m</td>
// // //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(Aᵀ)ᵀ = A; (AB)ᵀ = BᵀAᵀ (order reverses)</td>
// // //     </tr>
// // //     <tr>
// // //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Power Aᵏ</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">A square (n × n), k ≥ 0 (or k ∈ ℤ if invertible)</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">n × n</td>
// // //       <td style="padding: 12px 15px; color: #34495e;">Aʲ Aᵏ = Aʲ⁺ᵏ; (AB)ᵏ ≠ Aᵏ Bᵏ in general</td>
// // //     </tr>
// // //   </tbody>
// // // </table>
// // // `

// // //   // ---------- SECTIONS (original prose preserved verbatim) ----------

// // // //  const sectionsContent = {
// // // //   obj1: {
// // // //     title: `Matrix Addition`,
// // // //     content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

// // // // $$(A + B)_{ij} = a_{ij} + b_{ij}$$

// // // // For example,

// // // // $$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

// // // // If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

// // // // Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj2: {
// // // //     title: `Matrix Subtraction`,
// // // //     content: `Subtraction is defined as addition of the negative:

// // // // $$A - B = A + (-B)$$

// // // // Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj3: {
// // // //     title: `Scalar Multiplication`,
// // // //     content: `Multiplying a matrix by a scalar $c$ scales every entry:

// // // // $$(cA)_{ij} = c \\cdot a_{ij}$$

// // // // For example,

// // // // $$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

// // // // Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj4: {
// // // //     title: `Linear Combinations of Matrices`,
// // // //     content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

// // // // $$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

// // // // is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj5: {
// // // //     title: `Matrix Multiplication — Definition`,
// // // //     content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

// // // // $$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$

// // // // The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

// // // // ## Worked Example

// // // // $$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

// // // // The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

// // // // $$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

// // // // $$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

// // // // $$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

// // // // Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj6: {
// // // //     title: `Matrix Multiplication — Properties`,
// // // //     content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

// // // // Associativity holds: $(AB)C = A(BC)$ whenever all products are defined. Distribution holds on both sides: $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$. Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

// // // // Commutativity, however, fails. In general, $AB \\neq BA$, even when both products happen to be defined. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

// // // // Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj7: {
// // // //     title: `Matrix Multiplication — Column and Row Interpretations`,
// // // //     content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

// // // // The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

// // // // $$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

// // // // Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

// // // // The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

// // // // A third perspective writes the product as a sum of rank-one outer products:

// // // // $$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

// // // // Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj8: {
// // // //     title: `The Transpose`,
// // // //     content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

// // // // $$(A^T)_{ij} = a_{ji}$$

// // // // For example,

// // // // $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

// // // // The transpose satisfies $(A^T)^T = A$, distributes over addition ($(A + B)^T = A^T + B^T$), and commutes with scalar multiplication ($(cA)^T = cA^T$). The product rule reverses the order:

// // // // $$(AB)^T = B^T A^T$$

// // // // This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

// // // // A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj9: {
// // // //     title: `Matrix Powers`,
// // // //     content: `For a square matrix $A$, powers are defined by repeated multiplication:

// // // // $$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$

// // // // The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

// // // // One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

// // // // Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj10: {
// // // //     title: `Elementary Matrices`,
// // // //     content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

// // // // The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

// // // // Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

// // // // This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj11: {
// // // //     title: `Matrix Decompositions`,
// // // //     content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

// // // // The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

// // // // The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

// // // // The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

// // // // The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

// // // // The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

// // // // Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // //   obj12: {
// // // //     title: `Dimension Summary`,
// // // //     content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

// // // // A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The "inner" dimensions must match and are consumed; the "outer" dimensions survive into the result.`,
// // // //     before: ``,
// // // //     after: ``,
// // // //     link: ``,
// // // //   },
// // // // }



// // // // formulas-injected: v1 | 2026-06-16 | 13 callouts (obj1 matrix_addition direct, obj2 matrix_subtraction direct, obj3 scalar_multiplication_of_matrices direct, obj5 matrix_multiplication direct, obj6 matrix_multiplication_associativity + matrix_multiplication_distributivity + matrix_multiplication_non_commutativity inline-promote, obj8 transpose_definition direct + transpose_involution + transpose_of_sum + transpose_of_scalar_multiple inline-promote + transpose_of_product direct, obj9 matrix_power direct)

// // // const sectionsContent = {
// // //   obj1: {
// // //     title: `Matrix Addition`,
// // //     content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

// // // @academic[formula_callout:matrix_addition|Matrix Addition|$$(A + B)_{ij} = a_{ij} + b_{ij}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#matrix_addition]@

// // // For example,

// // // $$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

// // // If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

// // // Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `Matrix Subtraction`,
// // //     content: `Subtraction is defined as addition of the negative:

// // // @academic[formula_callout:matrix_subtraction|Matrix Subtraction|$$A - B = A + (-B)$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#matrix_subtraction]@

// // // Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `Scalar Multiplication`,
// // //     content: `Multiplying a matrix by a scalar $c$ scales every entry:

// // // @academic[formula_callout:scalar_multiplication_of_matrices|Scalar Multiplication of Matrices|$$(cA)_{ij} = c \\cdot a_{ij}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#scalar_multiplication_of_matrices]@

// // // For example,

// // // $$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

// // // Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `Linear Combinations of Matrices`,
// // //     content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

// // // $$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

// // // is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `Matrix Multiplication — Definition`,
// // //     content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

// // // @academic[formula_callout:matrix_multiplication|Matrix Multiplication|$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication]@

// // // The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

// // // ## Worked Example

// // // $$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

// // // The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

// // // $$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

// // // $$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

// // // $$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

// // // Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `Matrix Multiplication — Properties`,
// // //     content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

// // // Associativity holds whenever all products are defined:

// // // @academic[formula_callout:matrix_multiplication_associativity|Matrix Multiplication Associativity|$$(AB)C = A(BC)$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_associativity]@

// // // Distribution holds on both sides:

// // // @academic[formula_callout:matrix_multiplication_distributivity|Matrix Multiplication Distributivity|$$A(B + C) = AB + AC, \\quad (A + B)C = AC + BC$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_distributivity]@

// // // Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

// // // Commutativity, however, fails:

// // // @academic[formula_callout:matrix_multiplication_non_commutativity|Matrix Multiplication Non-Commutativity|$$AB \\neq BA \\text{ in general}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_non_commutativity]@

// // // Even when both products happen to be defined, they generally produce different results. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

// // // Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `Matrix Multiplication — Column and Row Interpretations`,
// // //     content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

// // // The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

// // // $$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

// // // Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

// // // The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

// // // A third perspective writes the product as a sum of rank-one outer products:

// // // $$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

// // // Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `The Transpose`,
// // //     content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

// // // @academic[formula_callout:transpose_definition|Transpose Definition|$$(A^T)_{ij} = a_{ji}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#transpose_definition]@

// // // For example,

// // // $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

// // // Applying the transpose twice recovers the original matrix:

// // // @academic[formula_callout:transpose_involution|Transpose Involution|$$(A^T)^T = A$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#transpose_involution]@

// // // The transpose distributes over addition:

// // // @academic[formula_callout:transpose_of_sum|Transpose of Sum|$$(A + B)^T = A^T + B^T$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#transpose_of_sum]@

// // // and commutes with scalar multiplication:

// // // @academic[formula_callout:transpose_of_scalar_multiple|Transpose of Scalar Multiple|$$(cA)^T = c\\, A^T$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#transpose_of_scalar_multiple]@

// // // The product rule reverses the order:

// // // @academic[formula_callout:transpose_of_product|Transpose of Product|$$(AB)^T = B^T A^T$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#transpose_of_product]@

// // // This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

// // // A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `Matrix Powers`,
// // //     content: `For a square matrix $A$, powers are defined by repeated multiplication:

// // // @academic[formula_callout:matrix_power|Matrix Power|$$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$]@
// // // @academic[formulas_link:/linear-algebra/formulas#matrix_power]@

// // // The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

// // // One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

// // // Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `Elementary Matrices`,
// // //     content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

// // // The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

// // // Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

// // // This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj11: {
// // //     title: `Matrix Decompositions`,
// // //     content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

// // // The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

// // // The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

// // // The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

// // // The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

// // // The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

// // // Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj12: {
// // //     title: `Dimension Summary`,
// // //     content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

// // // A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The &quot;inner&quot; dimensions must match and are consumed; the &quot;outer&quot; dimensions survive into the result.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }



// // // const introContent = {

// // //     id: "intro",
// // //   title: `Manipulating Matrices`,
// // //   content: `Matrices support a family of operations — addition, scalar multiplication, matrix multiplication, transposition, and exponentiation — each with its own rules and dimension requirements. Matrix multiplication stands apart from the rest: it is not commutative, it demands compatible dimensions, and it admits several geometric and algebraic interpretations that make it one of the richest operations in all of mathematics.`,
// // // }


// // // const faqQuestions = {
// // //   obj1: {
// // //     question: "How do you add two matrices?",
// // //     answer: "Two matrices can be added only if they share the same dimensions. The sum is computed entry by entry: the (i,j) entry of A + B equals the sum of the (i,j) entries of A and B. Matrix addition is commutative and associative, with the zero matrix serving as the additive identity.",
// // //     sectionId: "1"
// // //   },
// // //   obj2: {
// // //     question: "How does matrix multiplication work?",
// // //     answer: "To multiply an m × n matrix A by an n × p matrix B, the number of columns of A must equal the number of rows of B. Each entry of the product AB is the dot product of a row of A with a column of B, producing an m × p result. Matrix multiplication is associative and distributive but not commutative.",
// // //     sectionId: "5"
// // //   },
// // //   obj3: {
// // //     question: "Why is matrix multiplication not commutative?",
// // //     answer: "Matrix multiplication is not commutative because each entry depends on the order of row-column pairings. Even for two square matrices of the same size, AB and BA generally produce different results. Additionally, the product of nonzero matrices can be zero, and cancellation does not hold unless the left factor is invertible.",
// // //     sectionId: "6"
// // //   },
// // //   obj4: {
// // //     question: "What does transposing a matrix do?",
// // //     answer: "Transposing a matrix converts its rows into columns and vice versa, turning an m × n matrix into an n × m matrix. The transpose reverses the order of products: (AB)ᵀ = BᵀAᵀ. A matrix equal to its own transpose is called symmetric.",
// // //     sectionId: "8"
// // //   },
// // //   obj5: {
// // //     question: "What are elementary matrices used for?",
// // //     answer: "An elementary matrix results from performing a single row operation on the identity matrix. Left-multiplying any matrix by an elementary matrix performs that same row operation. Every invertible matrix can be expressed as a product of elementary matrices, connecting row reduction to matrix factorization.",
// // //     sectionId: "10"
// // //   }
// // // }


// // // const schemas = {
// // //   learningResource: {
// // //     "@context": "https://schema.org",
// // //     "@type": "LearningResource",
// // //     "name": "Matrix Operations",
// // //     "description": "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
// // //     "url": "https://www.learnmathclass.com/linear-algebra/matrix/operations",
// // //     "inLanguage": "en-US",
// // //     "learningResourceType": "Explanation",
// // //     "educationalLevel": "High School, College",
// // //     "educationalUse": "Learning",
// // //     "audience": {
// // //       "@type": "EducationalAudience",
// // //       "educationalRole": "student"
// // //     },
// // //     "about": {
// // //       "@type": "Thing",
// // //       "name": "Matrix Operations"
// // //     },
// // //     "teaches": [
// // //       "Matrix addition, subtraction, and scalar multiplication",
// // //       "Matrix multiplication definition and dimension requirements",
// // //       "Non-commutativity of matrix products",
// // //       "Transpose operation and its properties",
// // //       "Matrix powers and diagonalization for efficient computation",
// // //       "Elementary matrices and matrix decompositions"
// // //     ],
// // //     "keywords": keyWords.join(", "),
// // //     "author": {
// // //       "@type": "Organization",
// // //       "name": "Learn Math Class"
// // //     },
// // //     "publisher": {
// // //       "@type": "Organization",
// // //       "name": "Learn Math Class"
// // //     },
// // //     "datePublished": "2024-01-15",
// // //     "dateModified": new Date().toISOString()
// // //   },

// // //   breadcrumb: {
// // //     "@context": "https://schema.org",
// // //     "@type": "BreadcrumbList",
// // //     "itemListElement": [
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 1,
// // //         "name": "Home",
// // //         "item": "https://www.learnmathclass.com"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 2,
// // //         "name": "Linear Algebra",
// // //         "item": "https://www.learnmathclass.com/linear-algebra"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 3,
// // //         "name": "Matrices",
// // //         "item": "https://www.learnmathclass.com/linear-algebra/matrix"
// // //       },
// // //       {
// // //         "@type": "ListItem",
// // //         "position": 4,
// // //         "name": "Matrix Operations",
// // //         "item": "https://www.learnmathclass.com/linear-algebra/matrix/operations"
// // //       }
// // //     ]
// // //   },

// // //   faq: {
// // //     "@context": "https://schema.org",
// // //     "@type": "FAQPage",
// // //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// // //       "@type": "Question",
// // //       "name": faqQuestions[key].question,
// // //       "acceptedAnswer": {
// // //         "@type": "Answer",
// // //         "text": faqQuestions[key].answer
// // //       }
// // //     }))
// // //   }
// // // }


// // //    return {
// // //   props: {
// // //     sectionsContent,
// // //     introContent,
// // //     obj6Table,
// // //     obj7Table,
// // //     obj11Table,
// // //     summaryTable,
// // //     faqQuestions,
// // //     schemas,
// // //     seoData: {
// // //       title: "Matrix Operations: Rules & Properties | Learn Math Class",
// // //       description: "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
// // //       keywords: keyWords.join(", "),
// // //       url: "/linear-algebra/matrix/operations",
// // //       name: "Matrix Operations"
// // //     },
// // //   }
// // // }
// // //    }


// // //    export default function MatrixOperationsPage({seoData, sectionsContent, introContent, obj6Table, obj7Table, obj11Table, summaryTable, faqQuestions, schemas}) {

// // //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// // //   const genericSections=[
// // //     {
// // //         id:'1',
// // //         title:sectionsContent.obj1.title,
// // //         link:sectionsContent.obj1.link,
// // //         content:[
// // //           sectionsContent.obj1.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'2',
// // //         title:sectionsContent.obj2.title,
// // //         link:sectionsContent.obj2.link,
// // //         content:[
// // //           sectionsContent.obj2.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'3',
// // //         title:sectionsContent.obj3.title,
// // //         link:sectionsContent.obj3.link,
// // //         content:[
// // //           sectionsContent.obj3.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'4',
// // //         title:sectionsContent.obj4.title,
// // //         link:sectionsContent.obj4.link,
// // //         content:[
// // //           sectionsContent.obj4.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'5',
// // //         title:sectionsContent.obj5.title,
// // //         link:sectionsContent.obj5.link,
// // //         content:[
// // //           sectionsContent.obj5.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'6',
// // //         title:sectionsContent.obj6.title,
// // //         link:sectionsContent.obj6.link,
// // //         content:[
// // //           sectionsContent.obj6.content,
// // //           <div key={'obj6-table'} style={tableWrapStyle}
// // //                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
// // //         ]
// // //     },
// // //     {
// // //         id:'7',
// // //         title:sectionsContent.obj7.title,
// // //         link:sectionsContent.obj7.link,
// // //         content:[
// // //           sectionsContent.obj7.content,
// // //           <div key={'obj7-table'} style={tableWrapStyle}
// // //                dangerouslySetInnerHTML={{ __html: obj7Table }} />,
// // //         ]
// // //     },
// // //     {
// // //         id:'8',
// // //         title:sectionsContent.obj8.title,
// // //         link:sectionsContent.obj8.link,
// // //         content:[
// // //           sectionsContent.obj8.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'9',
// // //         title:sectionsContent.obj9.title,
// // //         link:sectionsContent.obj9.link,
// // //         content:[
// // //           sectionsContent.obj9.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'10',
// // //         title:sectionsContent.obj10.title,
// // //         link:sectionsContent.obj10.link,
// // //         content:[
// // //           sectionsContent.obj10.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'11',
// // //         title:sectionsContent.obj11.title,
// // //         link:sectionsContent.obj11.link,
// // //         content:[
// // //           sectionsContent.obj11.content,
// // //           <div key={'obj11-table'} style={tableWrapStyle}
// // //                dangerouslySetInnerHTML={{ __html: obj11Table }} />,
// // //         ]
// // //     },
// // //     {
// // //         id:'12',
// // //         title:sectionsContent.obj12.title,
// // //         link:sectionsContent.obj12.link,
// // //         content:[
// // //           sectionsContent.obj12.content,
// // //           <div key={'summary-table'} style={tableWrapStyle}
// // //                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
// // //         ]
// // //     },
// // //     // {
// // //     //     id:'13',
// // //     //     title:sectionsContent.obj13.title,
// // //     //     link:sectionsContent.obj13.link,
// // //     //     content:[
// // //     //       sectionsContent.obj13.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'14',
// // //     //     title:sectionsContent.obj14.title,
// // //     //     link:sectionsContent.obj14.link,
// // //     //     content:[
// // //     //       sectionsContent.obj14.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'15',
// // //     //     title:sectionsContent.obj15.title,
// // //     //     link:sectionsContent.obj15.link,
// // //     //     content:[
// // //     //       sectionsContent.obj15.content,
// // //     //     ]
// // //     // },

// // // ]

// // //   return (
// // //    <>
// // // <Head>
// // //   <title>{seoData.title}</title>
// // //   <meta name="description" content={seoData.description} />
// // //   <meta name="keywords" content={seoData.keywords} />
// // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// // //   <meta property="og:title" content={seoData.title} />
// // //   <meta property="og:description" content={seoData.description} />
// // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //   <meta property="og:type" content="article" />
// // //   <meta property="og:site_name" content="Learn Math Class" />

// // //   <meta name="twitter:card" content="summary" />
// // //   <meta name="twitter:title" content={seoData.title} />
// // //   <meta name="twitter:description" content={seoData.description} />

// // //   <meta name="robots" content="index, follow" />

// // //   <script
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{
// // //       __html: JSON.stringify(schemas.learningResource)
// // //     }}
// // //   />

// // //   <script
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{
// // //       __html: JSON.stringify(schemas.breadcrumb)
// // //     }}
// // //   />

// // //   <script
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{
// // //       __html: JSON.stringify(schemas.faq)
// // //     }}
// // //   />
// // // </Head>
// // //    {/* <GenericNavbar/> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <OperaSidebar
// // //            side='right'
// // //            // topOffset='65px'
// // //            sidebarWidth='45px'
// // //            panelWidth='200px'
// // //            iconColor='white'
// // //            panelBackgroundColor='#f2f2f2'
// // //          />
// // //    <Breadcrumb/>
// // //    <br/>
// // //    <br/>
// // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Operations on Matrices</h1>
// // //    <br/>
// // //    <br/>
// // //    <SectionTableOfContents sections={genericSections}
// // //     showSecondaryNav={true}
// // //          secondaryNavMode="siblings"  // or "children"
// // //          secondaryNavTitle="More in this Section"

// // //    />
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <IntroSection
// // //           id={introContent.id}
// // //           title={introContent.title}
// // //           content={introContent.content}
// // //            backgroundColor='#f9fafb'
// // //           //  "#f2f2f2"
// // //           textColor="#06357a"
// // //         />
// // //    <br/>
// // //    <br/>
// // //    <Sections sections={genericSections}/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    {/* <ScrollUpButton/> */}
// // //    </>
// // //   )
// // // }



// // // tables-optimized: v4 | 2026-05-20 | 4 tables (obj6 aggregation, obj7 comparison, obj11 aggregation, obj12 summary capstone)

// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import '../../../pages.css'
// // import Head from 'next/head'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import { tableHeaders } from '@/app/styles/theme'
// // import PropertyLawCard from '@/app/components/infographics/linear-algebra/PropertyLawCard'


// // export async function getStaticProps(){
// // const keyWords = [
// //   'matrix operations',
// //   'matrix addition',
// //   'matrix multiplication',
// //   'matrix transpose',
// //   'scalar multiplication matrix',
// //   'matrix multiplication rules',
// //   'matrix multiplication not commutative',
// //   'matrix powers',
// //   'elementary matrices',
// //   'matrix decomposition',
// //   'matrix product dimensions',
// //   'transpose properties',
// //   'linear combination matrices',
// //   'LU decomposition',
// //   'matrix arithmetic linear algebra'
// // ]

// //   const linkStyle = 'color: inherit; text-decoration: underline;'

// //   // ---------- TABLES ----------

// //   // obj6 — which algebraic laws survive the matrix product
// //   const multiplicationLaws = {
// //     kicker: 'Matrix · multiplication',
// //     title: 'Which laws survive the product',
// //     tallyLabel: 'laws',
// //     intro: 'Matrix multiplication inherits most of scalar arithmetic and breaks four rules that are deeply ingrained from it. Every entry states its condition; every failure exhibits the pair that breaks it.',
// //     footnote: 'Four of eight fail. Each failure traces back to the same root — a matrix can collapse directions, and a collapsed direction cannot be recovered. That is what [invertibility](!/linear-algebra/matrix/inverse) restores, and why every &quot;holds when&quot; below names it.',
// //     laws: [
// //       {
// //         name: 'Associativity',
// //         statement: '$(AB)C = A(BC)$',
// //         verdict: 'holds',
// //         requires: 'all products defined',
// //         note: 'Lets you drop parentheses entirely in a chain of products — the reason [matrix powers](!/linear-algebra/matrix/operations) are well defined without bracketing.',
// //       },
// //       {
// //         name: 'Left distribution',
// //         statement: '$A(B + C) = AB + AC$',
// //         verdict: 'holds',
// //         requires: '$B, C$ same shape',
// //       },
// //       {
// //         name: 'Right distribution',
// //         statement: '$(A + B)C = AC + BC$',
// //         verdict: 'holds',
// //         requires: '$A, B$ same shape',
// //         note: 'Left and right distribution are separate statements and each must be checked, precisely because the product does not commute.',
// //       },
// //       {
// //         name: 'Scalar passage',
// //         statement: '$c(AB) = (cA)B = A(cB)$',
// //         verdict: 'holds',
// //         requires: 'any scalar $c$',
// //       },
// //       {
// //         name: 'Identity',
// //         statement: '$AI = IA = A$',
// //         verdict: 'holds',
// //         requires: 'conformable dimensions',
// //         note: 'The one place commutativity is guaranteed — $I$ commutes with everything its shape allows.',
// //       },
// //       {
// //         name: 'Commutativity',
// //         statement: '$AB \\neq BA$ in general',
// //         verdict: 'fails',
// //         holdsWhen: 'both diagonal, or $B = A^{-1}$, or $B = I$',
// //         note: 'The most consequential failure in the subject. It is why the transpose reverses order and why [similarity](!/linear-algebra/transformations/basis-change) rather than equality is the working notion of &quot;same transformation&quot;.',
// //         witness: {
// //           label: 'Witness',
// //           lines: [
// //             'A = [[1, 2], [0, 0]],  B = [[0, 0], [3, 4]]',
// //             'AB = [[6, 8], [0, 0]]',
// //             'BA = [[0, 0], [3, 6]]',
// //           ],
// //         },
// //       },
// //       {
// //         name: 'Zero-product law',
// //         statement: '$AB = O \\nRightarrow A = O$ or $B = O$',
// //         verdict: 'fails',
// //         holdsWhen: 'either factor invertible',
// //         note: 'Matrices are not an integral domain. Two nonzero matrices can annihilate each other — which is what a nontrivial [null space](!/linear-algebra/vector-spaces/fundamental-spaces) means at the level of the whole product.',
// //         witness: {
// //           label: 'Witness',
// //           lines: [
// //             'A = [[1, 2], [2, 4]],  B = [[2, −4], [−1, 2]]',
// //             'AB = O, with neither factor zero',
// //           ],
// //         },
// //       },
// //       {
// //         name: 'Cancellation',
// //         statement: '$AB = AC \\nRightarrow B = C$',
// //         verdict: 'fails',
// //         holdsWhen: '$A$ [invertible](!/linear-algebra/matrix/inverse)',
// //         failsWhen: '$A$ singular',
// //         witness: {
// //           label: 'Witness',
// //           lines: [
// //             'A = [[1, 0], [0, 0]]',
// //             'B = [[1, 1], [1, 1]],  C = [[1, 1], [2, 2]]',
// //             'AB = AC = [[1, 1], [0, 0]] but B ≠ C',
// //           ],
// //         },
// //       },
// //     ],
// //   }

// //   // obj7 — comparison: four interpretations of matrix multiplication
// //   const obj7Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.comparison}">Interpretation</th>
// //       <th style="${tableHeaders.comparison}">Building block</th>
// //       <th style="${tableHeaders.comparison}">Formula for AB</th>
// //       <th style="${tableHeaders.comparison}">When it shines</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Entry-by-entry</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scalar (i, j) entries</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(AB)ᵢⱼ = Σₖ aᵢₖ bₖⱼ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">hand computation, definition</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column view</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns of B</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">column j of AB = A · bⱼ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">link to <a href="/linear-algebra/transformations" style="${linkStyle}">linear transformations</a></td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row view</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rows of A</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row i of AB = aᵢ · B</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/matrix/rank" style="${linkStyle}">rank</a>, row reduction</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Outer product sum</td>
// //       <td style="padding: 12px 15px; color: #34495e;">rank-1 matrices</td>
// //       <td style="padding: 12px 15px; color: #34495e;">AB = Σₖ (col k of A)(row k of B)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">low-rank approximation, SVD</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj11 — aggregation: matrix decompositions catalog
// //   const obj11Table = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.aggregation}">Decomposition</th>
// //       <th style="${tableHeaders.aggregation}">Form</th>
// //       <th style="${tableHeaders.aggregation}">Requires</th>
// //       <th style="${tableHeaders.aggregation}">Primary use</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">LU</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LU (L lower, U upper triangular)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any square matrix (with pivoting)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solving Ax = b for many right-hand sides</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">QR</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = QR (Q orthogonal, R upper triangular)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any matrix</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">least squares, eigenvalue algorithms</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cholesky</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LLᵀ</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/matrix/types" style="${linkStyle}">symmetric</a> positive definite</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">half-cost LU for SPD systems</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Eigendecomposition</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = PDP⁻¹ (D diagonal)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonalizable square matrix</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matrix powers, spectral analysis</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">SVD</td>
// //       <td style="padding: 12px 15px; color: #34495e;">A = UΣVᵀ (U, V orthogonal; Σ diagonal ≥ 0)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">any matrix of any shape</td>
// //       <td style="padding: 12px 15px; color: #34495e;">rank, fundamental subspaces, best low-rank approximation</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // obj12 — summary capstone: all operations + dimension and structure
// //   const summaryTable = `
// // <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
// //   <thead>
// //     <tr>
// //       <th style="${tableHeaders.summary}">Operation</th>
// //       <th style="${tableHeaders.summary}">Input requirement</th>
// //       <th style="${tableHeaders.summary}">Result size</th>
// //       <th style="${tableHeaders.summary}">Key property</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition / subtraction</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B both m × n</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative; additive identity O</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar multiplication</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n; c any scalar</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributes over both matrix and scalar sum</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear combination</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all Aᵢ same m × n shape</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">turns m × n matrices into a <a href="/linear-algebra/vector-spaces" style="${linkStyle}">vector space</a> of dimension mn</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Matrix multiplication</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n, B is n × p &nbsp;(inner dims match)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × p</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">associative, NOT commutative; inner dim consumed</td>
// //     </tr>
// //     <tr style="background: #f8f9fa;">
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Transpose</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n (no other restriction)</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n × m</td>
// //       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(Aᵀ)ᵀ = A; (AB)ᵀ = BᵀAᵀ (order reverses)</td>
// //     </tr>
// //     <tr>
// //       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Power Aᵏ</td>
// //       <td style="padding: 12px 15px; color: #34495e;">A square (n × n), k ≥ 0 (or k ∈ ℤ if invertible)</td>
// //       <td style="padding: 12px 15px; color: #34495e;">n × n</td>
// //       <td style="padding: 12px 15px; color: #34495e;">Aʲ Aᵏ = Aʲ⁺ᵏ; (AB)ᵏ ≠ Aᵏ Bᵏ in general</td>
// //     </tr>
// //   </tbody>
// // </table>
// // `

// //   // ---------- SECTIONS (original prose preserved verbatim) ----------

// // //  const sectionsContent = {
// // //   obj1: {
// // //     title: `Matrix Addition`,
// // //     content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

// // // $$(A + B)_{ij} = a_{ij} + b_{ij}$$

// // // For example,

// // // $$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

// // // If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

// // // Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj2: {
// // //     title: `Matrix Subtraction`,
// // //     content: `Subtraction is defined as addition of the negative:

// // // $$A - B = A + (-B)$$

// // // Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj3: {
// // //     title: `Scalar Multiplication`,
// // //     content: `Multiplying a matrix by a scalar $c$ scales every entry:

// // // $$(cA)_{ij} = c \\cdot a_{ij}$$

// // // For example,

// // // $$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

// // // Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj4: {
// // //     title: `Linear Combinations of Matrices`,
// // //     content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

// // // $$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

// // // is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj5: {
// // //     title: `Matrix Multiplication — Definition`,
// // //     content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

// // // $$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$

// // // The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

// // // ## Worked Example

// // // $$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

// // // The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

// // // $$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

// // // $$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

// // // $$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

// // // Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj6: {
// // //     title: `Matrix Multiplication — Properties`,
// // //     content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

// // // Associativity holds: $(AB)C = A(BC)$ whenever all products are defined. Distribution holds on both sides: $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$. Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

// // // Commutativity, however, fails. In general, $AB \\neq BA$, even when both products happen to be defined. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

// // // Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj7: {
// // //     title: `Matrix Multiplication — Column and Row Interpretations`,
// // //     content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

// // // The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

// // // $$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

// // // Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

// // // The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

// // // A third perspective writes the product as a sum of rank-one outer products:

// // // $$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

// // // Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj8: {
// // //     title: `The Transpose`,
// // //     content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

// // // $$(A^T)_{ij} = a_{ji}$$

// // // For example,

// // // $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

// // // The transpose satisfies $(A^T)^T = A$, distributes over addition ($(A + B)^T = A^T + B^T$), and commutes with scalar multiplication ($(cA)^T = cA^T$). The product rule reverses the order:

// // // $$(AB)^T = B^T A^T$$

// // // This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

// // // A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj9: {
// // //     title: `Matrix Powers`,
// // //     content: `For a square matrix $A$, powers are defined by repeated multiplication:

// // // $$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$

// // // The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

// // // One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

// // // Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj10: {
// // //     title: `Elementary Matrices`,
// // //     content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

// // // The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

// // // Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

// // // This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj11: {
// // //     title: `Matrix Decompositions`,
// // //     content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

// // // The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

// // // The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

// // // The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

// // // The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

// // // The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

// // // Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // //   obj12: {
// // //     title: `Dimension Summary`,
// // //     content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

// // // A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The "inner" dimensions must match and are consumed; the "outer" dimensions survive into the result.`,
// // //     before: ``,
// // //     after: ``,
// // //     link: ``,
// // //   },
// // // }



// // // formulas-injected: v1 | 2026-06-16 | 13 callouts (obj1 matrix_addition direct, obj2 matrix_subtraction direct, obj3 scalar_multiplication_of_matrices direct, obj5 matrix_multiplication direct, obj6 matrix_multiplication_associativity + matrix_multiplication_distributivity + matrix_multiplication_non_commutativity inline-promote, obj8 transpose_definition direct + transpose_involution + transpose_of_sum + transpose_of_scalar_multiple inline-promote + transpose_of_product direct, obj9 matrix_power direct)

// // const sectionsContent = {
// //   obj1: {
// //     title: `Matrix Addition`,
// //     content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

// // @academic[formula_callout:matrix_addition|Matrix Addition|$$(A + B)_{ij} = a_{ij} + b_{ij}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#matrix_addition]@

// // For example,

// // $$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

// // If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

// // Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Matrix Subtraction`,
// //     content: `Subtraction is defined as addition of the negative:

// // @academic[formula_callout:matrix_subtraction|Matrix Subtraction|$$A - B = A + (-B)$$]@
// // @academic[formulas_link:/linear-algebra/formulas#matrix_subtraction]@

// // Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Scalar Multiplication`,
// //     content: `Multiplying a matrix by a scalar $c$ scales every entry:

// // @academic[formula_callout:scalar_multiplication_of_matrices|Scalar Multiplication of Matrices|$$(cA)_{ij} = c \\cdot a_{ij}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#scalar_multiplication_of_matrices]@

// // For example,

// // $$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

// // Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Linear Combinations of Matrices`,
// //     content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

// // $$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

// // is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Matrix Multiplication — Definition`,
// //     content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

// // @academic[formula_callout:matrix_multiplication|Matrix Multiplication|$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication]@

// // The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

// // ## Worked Example

// // $$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

// // The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

// // $$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

// // $$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

// // $$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

// // Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Matrix Multiplication — Properties`,
// //     content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

// // Associativity holds whenever all products are defined:

// // @academic[formula_callout:matrix_multiplication_associativity|Matrix Multiplication Associativity|$$(AB)C = A(BC)$$]@
// // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_associativity]@

// // Distribution holds on both sides:

// // @academic[formula_callout:matrix_multiplication_distributivity|Matrix Multiplication Distributivity|$$A(B + C) = AB + AC, \\quad (A + B)C = AC + BC$$]@
// // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_distributivity]@

// // Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

// // Commutativity, however, fails:

// // @academic[formula_callout:matrix_multiplication_non_commutativity|Matrix Multiplication Non-Commutativity|$$AB \\neq BA \\text{ in general}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_non_commutativity]@

// // Even when both products happen to be defined, they generally produce different results. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

// // Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Matrix Multiplication — Column and Row Interpretations`,
// //     content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

// // The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

// // $$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

// // Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

// // The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

// // A third perspective writes the product as a sum of rank-one outer products:

// // $$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

// // Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `The Transpose`,
// //     content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

// // @academic[formula_callout:transpose_definition|Transpose Definition|$$(A^T)_{ij} = a_{ji}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#transpose_definition]@

// // For example,

// // $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

// // Applying the transpose twice recovers the original matrix:

// // @academic[formula_callout:transpose_involution|Transpose Involution|$$(A^T)^T = A$$]@
// // @academic[formulas_link:/linear-algebra/formulas#transpose_involution]@

// // The transpose distributes over addition:

// // @academic[formula_callout:transpose_of_sum|Transpose of Sum|$$(A + B)^T = A^T + B^T$$]@
// // @academic[formulas_link:/linear-algebra/formulas#transpose_of_sum]@

// // and commutes with scalar multiplication:

// // @academic[formula_callout:transpose_of_scalar_multiple|Transpose of Scalar Multiple|$$(cA)^T = c\\, A^T$$]@
// // @academic[formulas_link:/linear-algebra/formulas#transpose_of_scalar_multiple]@

// // The product rule reverses the order:

// // @academic[formula_callout:transpose_of_product|Transpose of Product|$$(AB)^T = B^T A^T$$]@
// // @academic[formulas_link:/linear-algebra/formulas#transpose_of_product]@

// // This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

// // A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Matrix Powers`,
// //     content: `For a square matrix $A$, powers are defined by repeated multiplication:

// // @academic[formula_callout:matrix_power|Matrix Power|$$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$]@
// // @academic[formulas_link:/linear-algebra/formulas#matrix_power]@

// // The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

// // One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

// // Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Elementary Matrices`,
// //     content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

// // The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

// // Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

// // This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Matrix Decompositions`,
// //     content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

// // The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

// // The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

// // The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

// // The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

// // The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

// // Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj12: {
// //     title: `Dimension Summary`,
// //     content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

// // A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The &quot;inner&quot; dimensions must match and are consumed; the &quot;outer&quot; dimensions survive into the result.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }



// // const introContent = {

// //     id: "intro",
// //   title: `Manipulating Matrices`,
// //   content: `Matrices support a family of operations — addition, scalar multiplication, matrix multiplication, transposition, and exponentiation — each with its own rules and dimension requirements. Matrix multiplication stands apart from the rest: it is not commutative, it demands compatible dimensions, and it admits several geometric and algebraic interpretations that make it one of the richest operations in all of mathematics.`,
// // }


// // const faqQuestions = {
// //   obj1: {
// //     question: "How do you add two matrices?",
// //     answer: "Two matrices can be added only if they share the same dimensions. The sum is computed entry by entry: the (i,j) entry of A + B equals the sum of the (i,j) entries of A and B. Matrix addition is commutative and associative, with the zero matrix serving as the additive identity.",
// //     sectionId: "1"
// //   },
// //   obj2: {
// //     question: "How does matrix multiplication work?",
// //     answer: "To multiply an m × n matrix A by an n × p matrix B, the number of columns of A must equal the number of rows of B. Each entry of the product AB is the dot product of a row of A with a column of B, producing an m × p result. Matrix multiplication is associative and distributive but not commutative.",
// //     sectionId: "5"
// //   },
// //   obj3: {
// //     question: "Why is matrix multiplication not commutative?",
// //     answer: "Matrix multiplication is not commutative because each entry depends on the order of row-column pairings. Even for two square matrices of the same size, AB and BA generally produce different results. Additionally, the product of nonzero matrices can be zero, and cancellation does not hold unless the left factor is invertible.",
// //     sectionId: "6"
// //   },
// //   obj4: {
// //     question: "What does transposing a matrix do?",
// //     answer: "Transposing a matrix converts its rows into columns and vice versa, turning an m × n matrix into an n × m matrix. The transpose reverses the order of products: (AB)ᵀ = BᵀAᵀ. A matrix equal to its own transpose is called symmetric.",
// //     sectionId: "8"
// //   },
// //   obj5: {
// //     question: "What are elementary matrices used for?",
// //     answer: "An elementary matrix results from performing a single row operation on the identity matrix. Left-multiplying any matrix by an elementary matrix performs that same row operation. Every invertible matrix can be expressed as a product of elementary matrices, connecting row reduction to matrix factorization.",
// //     sectionId: "10"
// //   }
// // }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": "Matrix Operations",
// //     "description": "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
// //     "url": "https://www.learnmathclass.com/linear-algebra/matrix/operations",
// //     "inLanguage": "en-US",
// //     "learningResourceType": "Explanation",
// //     "educationalLevel": "High School, College",
// //     "educationalUse": "Learning",
// //     "audience": {
// //       "@type": "EducationalAudience",
// //       "educationalRole": "student"
// //     },
// //     "about": {
// //       "@type": "Thing",
// //       "name": "Matrix Operations"
// //     },
// //     "teaches": [
// //       "Matrix addition, subtraction, and scalar multiplication",
// //       "Matrix multiplication definition and dimension requirements",
// //       "Non-commutativity of matrix products",
// //       "Transpose operation and its properties",
// //       "Matrix powers and diagonalization for efficient computation",
// //       "Elementary matrices and matrix decompositions"
// //     ],
// //     "keywords": keyWords.join(", "),
// //     "author": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "publisher": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "datePublished": "2024-01-15",
// //     "dateModified": new Date().toISOString()
// //   },

// //   breadcrumb: {
// //     "@context": "https://schema.org",
// //     "@type": "BreadcrumbList",
// //     "itemListElement": [
// //       {
// //         "@type": "ListItem",
// //         "position": 1,
// //         "name": "Home",
// //         "item": "https://www.learnmathclass.com"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 2,
// //         "name": "Linear Algebra",
// //         "item": "https://www.learnmathclass.com/linear-algebra"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 3,
// //         "name": "Matrices",
// //         "item": "https://www.learnmathclass.com/linear-algebra/matrix"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 4,
// //         "name": "Matrix Operations",
// //         "item": "https://www.learnmathclass.com/linear-algebra/matrix/operations"
// //       }
// //     ]
// //   },

// //   faq: {
// //     "@context": "https://schema.org",
// //     "@type": "FAQPage",
// //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// //       "@type": "Question",
// //       "name": faqQuestions[key].question,
// //       "acceptedAnswer": {
// //         "@type": "Answer",
// //         "text": faqQuestions[key].answer
// //       }
// //     }))
// //   }
// // }


// //    return {
// //   props: {
// //     sectionsContent,
// //     introContent,
// //     multiplicationLaws,
// //     obj7Table,
// //     obj11Table,
// //     summaryTable,
// //     faqQuestions,
// //     schemas,
// //     seoData: {
// //       title: "Matrix Operations: Rules & Properties | Learn Math Class",
// //       description: "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
// //       keywords: keyWords.join(", "),
// //       url: "/linear-algebra/matrix/operations",
// //       name: "Matrix Operations"
// //     },
// //   }
// // }
// //    }


// //    export default function MatrixOperationsPage({seoData, sectionsContent, introContent, multiplicationLaws, obj7Table, obj11Table, summaryTable, faqQuestions, schemas}) {

// //   const tableWrapStyle = { margin: '20px auto', width: '100%' }

// //   const genericSections=[
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //           <PropertyLawCard key={'obj6-laws'} data={multiplicationLaws} theme="navy" variant="plate" />,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //           <div key={'obj7-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj7Table }} />,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //           <div key={'obj11-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: obj11Table }} />,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //           <div key={'summary-table'} style={tableWrapStyle}
// //                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
// //         ]
// //     },
// //     // {
// //     //     id:'13',
// //     //     title:sectionsContent.obj13.title,
// //     //     link:sectionsContent.obj13.link,
// //     //     content:[
// //     //       sectionsContent.obj13.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'14',
// //     //     title:sectionsContent.obj14.title,
// //     //     link:sectionsContent.obj14.link,
// //     //     content:[
// //     //       sectionsContent.obj14.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'15',
// //     //     title:sectionsContent.obj15.title,
// //     //     link:sectionsContent.obj15.link,
// //     //     content:[
// //     //       sectionsContent.obj15.content,
// //     //     ]
// //     // },

// // ]

// //   return (
// //    <>
// // <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />

// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />

// //   <meta name="robots" content="index, follow" />

// //   <script
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{
// //       __html: JSON.stringify(schemas.learningResource)
// //     }}
// //   />

// //   <script
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{
// //       __html: JSON.stringify(schemas.breadcrumb)
// //     }}
// //   />

// //   <script
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{
// //       __html: JSON.stringify(schemas.faq)
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar
// //            side='right'
// //            // topOffset='65px'
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          />
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Operations on Matrices</h1>
// //    <br/>
// //    <br/>
// //    <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"

// //    />
// //    <br/>
// //    <br/>
// //    <br/>
// //     <IntroSection
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         />
// //    <br/>
// //    <br/>
// //    <Sections sections={genericSections}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }



// // tables-optimized: v4 | 2026-05-20 | 4 tables (obj6 aggregation, obj7 comparison, obj11 aggregation, obj12 summary capstone)

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import '../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'
// import PropertyLawCard from '@/app/components/infographics/linear-algebra/PropertyLawCard'
// import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


// export async function getStaticProps(){
// const keyWords = [
//   'matrix operations',
//   'matrix addition',
//   'matrix multiplication',
//   'matrix transpose',
//   'scalar multiplication matrix',
//   'matrix multiplication rules',
//   'matrix multiplication not commutative',
//   'matrix powers',
//   'elementary matrices',
//   'matrix decomposition',
//   'matrix product dimensions',
//   'transpose properties',
//   'linear combination matrices',
//   'LU decomposition',
//   'matrix arithmetic linear algebra'
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj6 — which algebraic laws survive the matrix product
//   const multiplicationLaws = {
//     kicker: 'Matrix · multiplication',
//     title: 'Which laws survive the product',
//     tallyLabel: 'laws',
//     intro: 'Matrix multiplication inherits most of scalar arithmetic and breaks four rules that are deeply ingrained from it. Every entry states its condition; every failure exhibits the pair that breaks it.',
//     footnote: 'Four of eight fail. Each failure traces back to the same root — a matrix can collapse directions, and a collapsed direction cannot be recovered. That is what [invertibility](!/linear-algebra/matrix/inverse) restores, and why every &quot;holds when&quot; below names it.',
//     laws: [
//       {
//         name: 'Associativity',
//         statement: '$(AB)C = A(BC)$',
//         verdict: 'holds',
//         requires: 'all products defined',
//         note: 'Lets you drop parentheses entirely in a chain of products — the reason [matrix powers](!/linear-algebra/matrix/operations) are well defined without bracketing.',
//       },
//       {
//         name: 'Left distribution',
//         statement: '$A(B + C) = AB + AC$',
//         verdict: 'holds',
//         requires: '$B, C$ same shape',
//       },
//       {
//         name: 'Right distribution',
//         statement: '$(A + B)C = AC + BC$',
//         verdict: 'holds',
//         requires: '$A, B$ same shape',
//         note: 'Left and right distribution are separate statements and each must be checked, precisely because the product does not commute.',
//       },
//       {
//         name: 'Scalar passage',
//         statement: '$c(AB) = (cA)B = A(cB)$',
//         verdict: 'holds',
//         requires: 'any scalar $c$',
//       },
//       {
//         name: 'Identity',
//         statement: '$AI = IA = A$',
//         verdict: 'holds',
//         requires: 'conformable dimensions',
//         note: 'The one place commutativity is guaranteed — $I$ commutes with everything its shape allows.',
//       },
//       {
//         name: 'Commutativity',
//         statement: '$AB \\neq BA$ in general',
//         verdict: 'fails',
//         holdsWhen: 'both diagonal, or $B = A^{-1}$, or $B = I$',
//         note: 'The most consequential failure in the subject. It is why the transpose reverses order and why [similarity](!/linear-algebra/transformations/basis-change) rather than equality is the working notion of &quot;same transformation&quot;.',
//         witness: {
//           label: 'Witness',
//           lines: [
//             'A = [[1, 2], [0, 0]],  B = [[0, 0], [3, 4]]',
//             'AB = [[6, 8], [0, 0]]',
//             'BA = [[0, 0], [3, 6]]',
//           ],
//         },
//       },
//       {
//         name: 'Zero-product law',
//         statement: '$AB = O \\nRightarrow A = O$ or $B = O$',
//         verdict: 'fails',
//         holdsWhen: 'either factor invertible',
//         note: 'Matrices are not an integral domain. Two nonzero matrices can annihilate each other — which is what a nontrivial [null space](!/linear-algebra/vector-spaces/fundamental-spaces) means at the level of the whole product.',
//         witness: {
//           label: 'Witness',
//           lines: [
//             'A = [[1, 2], [2, 4]],  B = [[2, −4], [−1, 2]]',
//             'AB = O, with neither factor zero',
//           ],
//         },
//       },
//       {
//         name: 'Cancellation',
//         statement: '$AB = AC \\nRightarrow B = C$',
//         verdict: 'fails',
//         holdsWhen: '$A$ [invertible](!/linear-algebra/matrix/inverse)',
//         failsWhen: '$A$ singular',
//         witness: {
//           label: 'Witness',
//           lines: [
//             'A = [[1, 0], [0, 0]]',
//             'B = [[1, 1], [1, 1]],  C = [[1, 1], [2, 2]]',
//             'AB = AC = [[1, 1], [0, 0]] but B ≠ C',
//           ],
//         },
//       },
//     ],
//   }

//   // obj7 — comparison: four interpretations of matrix multiplication
//   const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Interpretation</th>
//       <th style="${tableHeaders.comparison}">Building block</th>
//       <th style="${tableHeaders.comparison}">Formula for AB</th>
//       <th style="${tableHeaders.comparison}">When it shines</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Entry-by-entry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scalar (i, j) entries</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(AB)ᵢⱼ = Σₖ aᵢₖ bₖⱼ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">hand computation, definition</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Column view</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">columns of B</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">column j of AB = A · bⱼ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">link to <a href="/linear-algebra/transformations" style="${linkStyle}">linear transformations</a></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Row view</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rows of A</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row i of AB = aᵢ · B</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/matrix/rank" style="${linkStyle}">rank</a>, row reduction</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Outer product sum</td>
//       <td style="padding: 12px 15px; color: #34495e;">rank-1 matrices</td>
//       <td style="padding: 12px 15px; color: #34495e;">AB = Σₖ (col k of A)(row k of B)</td>
//       <td style="padding: 12px 15px; color: #34495e;">low-rank approximation, SVD</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj11 — aggregation: matrix decompositions catalog
//   const obj11Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Decomposition</th>
//       <th style="${tableHeaders.aggregation}">Form</th>
//       <th style="${tableHeaders.aggregation}">Requires</th>
//       <th style="${tableHeaders.aggregation}">Primary use</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">LU</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LU (L lower, U upper triangular)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any square matrix (with pivoting)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solving Ax = b for many right-hand sides</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">QR</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = QR (Q orthogonal, R upper triangular)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any matrix</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">least squares, eigenvalue algorithms</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cholesky</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LLᵀ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/matrix/types" style="${linkStyle}">symmetric</a> positive definite</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">half-cost LU for SPD systems</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Eigendecomposition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = PDP⁻¹ (D diagonal)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonalizable square matrix</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matrix powers, spectral analysis</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">SVD</td>
//       <td style="padding: 12px 15px; color: #34495e;">A = UΣVᵀ (U, V orthogonal; Σ diagonal ≥ 0)</td>
//       <td style="padding: 12px 15px; color: #34495e;">any matrix of any shape</td>
//       <td style="padding: 12px 15px; color: #34495e;">rank, fundamental subspaces, best low-rank approximation</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj12 — summary capstone: all operations + dimension and structure
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Operation</th>
//       <th style="${tableHeaders.summary}">Input requirement</th>
//       <th style="${tableHeaders.summary}">Result size</th>
//       <th style="${tableHeaders.summary}">Key property</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition / subtraction</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B both m × n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative; additive identity O</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar multiplication</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n; c any scalar</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributes over both matrix and scalar sum</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear combination</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all Aᵢ same m × n shape</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">turns m × n matrices into a <a href="/linear-algebra/vector-spaces" style="${linkStyle}">vector space</a> of dimension mn</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Matrix multiplication</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n, B is n × p &nbsp;(inner dims match)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × p</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">associative, NOT commutative; inner dim consumed</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Transpose</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n (no other restriction)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n × m</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(Aᵀ)ᵀ = A; (AB)ᵀ = BᵀAᵀ (order reverses)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Power Aᵏ</td>
//       <td style="padding: 12px 15px; color: #34495e;">A square (n × n), k ≥ 0 (or k ∈ ℤ if invertible)</td>
//       <td style="padding: 12px 15px; color: #34495e;">n × n</td>
//       <td style="padding: 12px 15px; color: #34495e;">Aʲ Aᵏ = Aʲ⁺ᵏ; (AB)ᵏ ≠ Aᵏ Bᵏ in general</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // ---------- SECTIONS (original prose preserved verbatim) ----------

// //  const sectionsContent = {
// //   obj1: {
// //     title: `Matrix Addition`,
// //     content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

// // $$(A + B)_{ij} = a_{ij} + b_{ij}$$

// // For example,

// // $$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

// // If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

// // Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj2: {
// //     title: `Matrix Subtraction`,
// //     content: `Subtraction is defined as addition of the negative:

// // $$A - B = A + (-B)$$

// // Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj3: {
// //     title: `Scalar Multiplication`,
// //     content: `Multiplying a matrix by a scalar $c$ scales every entry:

// // $$(cA)_{ij} = c \\cdot a_{ij}$$

// // For example,

// // $$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

// // Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj4: {
// //     title: `Linear Combinations of Matrices`,
// //     content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

// // $$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

// // is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj5: {
// //     title: `Matrix Multiplication — Definition`,
// //     content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

// // $$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$

// // The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

// // ## Worked Example

// // $$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

// // The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

// // $$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

// // $$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

// // $$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

// // Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj6: {
// //     title: `Matrix Multiplication — Properties`,
// //     content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

// // Associativity holds: $(AB)C = A(BC)$ whenever all products are defined. Distribution holds on both sides: $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$. Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

// // Commutativity, however, fails. In general, $AB \\neq BA$, even when both products happen to be defined. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

// // Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj7: {
// //     title: `Matrix Multiplication — Column and Row Interpretations`,
// //     content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

// // The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

// // $$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

// // Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

// // The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

// // A third perspective writes the product as a sum of rank-one outer products:

// // $$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

// // Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj8: {
// //     title: `The Transpose`,
// //     content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

// // $$(A^T)_{ij} = a_{ji}$$

// // For example,

// // $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

// // The transpose satisfies $(A^T)^T = A$, distributes over addition ($(A + B)^T = A^T + B^T$), and commutes with scalar multiplication ($(cA)^T = cA^T$). The product rule reverses the order:

// // $$(AB)^T = B^T A^T$$

// // This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

// // A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj9: {
// //     title: `Matrix Powers`,
// //     content: `For a square matrix $A$, powers are defined by repeated multiplication:

// // $$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$

// // The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

// // One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

// // Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj10: {
// //     title: `Elementary Matrices`,
// //     content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

// // The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

// // Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

// // This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj11: {
// //     title: `Matrix Decompositions`,
// //     content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

// // The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

// // The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

// // The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

// // The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

// // The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

// // Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// //   obj12: {
// //     title: `Dimension Summary`,
// //     content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

// // A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The "inner" dimensions must match and are consumed; the "outer" dimensions survive into the result.`,
// //     before: ``,
// //     after: ``,
// //     link: ``,
// //   },
// // }



// // formulas-injected: v1 | 2026-06-16 | 13 callouts (obj1 matrix_addition direct, obj2 matrix_subtraction direct, obj3 scalar_multiplication_of_matrices direct, obj5 matrix_multiplication direct, obj6 matrix_multiplication_associativity + matrix_multiplication_distributivity + matrix_multiplication_non_commutativity inline-promote, obj8 transpose_definition direct + transpose_involution + transpose_of_sum + transpose_of_scalar_multiple inline-promote + transpose_of_product direct, obj9 matrix_power direct)

// const sectionsContent = {
//   obj1: {
//     title: `Matrix Addition`,
//     content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

// @academic[formula_callout:matrix_addition|Matrix Addition|$$(A + B)_{ij} = a_{ij} + b_{ij}$$]@
// @academic[formulas_link:/linear-algebra/formulas#matrix_addition]@

// For example,

// $$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

// If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

// Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Matrix Subtraction`,
//     content: `Subtraction is defined as addition of the negative:

// @academic[formula_callout:matrix_subtraction|Matrix Subtraction|$$A - B = A + (-B)$$]@
// @academic[formulas_link:/linear-algebra/formulas#matrix_subtraction]@

// Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Scalar Multiplication`,
//     content: `Multiplying a matrix by a scalar $c$ scales every entry:

// @academic[formula_callout:scalar_multiplication_of_matrices|Scalar Multiplication of Matrices|$$(cA)_{ij} = c \\cdot a_{ij}$$]@
// @academic[formulas_link:/linear-algebra/formulas#scalar_multiplication_of_matrices]@

// For example,

// $$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

// Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Linear Combinations of Matrices`,
//     content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

// $$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

// is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Matrix Multiplication — Definition`,
//     content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

// @academic[formula_callout:matrix_multiplication|Matrix Multiplication|$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$]@
// @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication]@

// The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

// ## Worked Example

// $$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

// The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

// $$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

// $$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

// $$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

// Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Matrix Multiplication — Properties`,
//     content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

// Associativity holds whenever all products are defined:

// @academic[formula_callout:matrix_multiplication_associativity|Matrix Multiplication Associativity|$$(AB)C = A(BC)$$]@
// @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_associativity]@

// Distribution holds on both sides:

// @academic[formula_callout:matrix_multiplication_distributivity|Matrix Multiplication Distributivity|$$A(B + C) = AB + AC, \\quad (A + B)C = AC + BC$$]@
// @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_distributivity]@

// Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

// Commutativity, however, fails:

// @academic[formula_callout:matrix_multiplication_non_commutativity|Matrix Multiplication Non-Commutativity|$$AB \\neq BA \\text{ in general}$$]@
// @academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_non_commutativity]@

// Even when both products happen to be defined, they generally produce different results. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

// Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Matrix Multiplication — Column and Row Interpretations`,
//     content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

// The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

// $$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

// Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

// The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

// A third perspective writes the product as a sum of rank-one outer products:

// $$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

// Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `The Transpose`,
//     content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

// @academic[formula_callout:transpose_definition|Transpose Definition|$$(A^T)_{ij} = a_{ji}$$]@
// @academic[formulas_link:/linear-algebra/formulas#transpose_definition]@

// For example,

// $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

// Applying the transpose twice recovers the original matrix:

// @academic[formula_callout:transpose_involution|Transpose Involution|$$(A^T)^T = A$$]@
// @academic[formulas_link:/linear-algebra/formulas#transpose_involution]@

// The transpose distributes over addition:

// @academic[formula_callout:transpose_of_sum|Transpose of Sum|$$(A + B)^T = A^T + B^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#transpose_of_sum]@

// and commutes with scalar multiplication:

// @academic[formula_callout:transpose_of_scalar_multiple|Transpose of Scalar Multiple|$$(cA)^T = c\\, A^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#transpose_of_scalar_multiple]@

// The product rule reverses the order:

// @academic[formula_callout:transpose_of_product|Transpose of Product|$$(AB)^T = B^T A^T$$]@
// @academic[formulas_link:/linear-algebra/formulas#transpose_of_product]@

// This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

// A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Matrix Powers`,
//     content: `For a square matrix $A$, powers are defined by repeated multiplication:

// @academic[formula_callout:matrix_power|Matrix Power|$$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$]@
// @academic[formulas_link:/linear-algebra/formulas#matrix_power]@

// The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

// One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

// Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Elementary Matrices`,
//     content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

// The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

// Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

// This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Matrix Decompositions`,
//     content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

// The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

// The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

// The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

// The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

// The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

// Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj12: {
//     title: `Dimension Summary`,
//     content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

// A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The &quot;inner&quot; dimensions must match and are consumed; the &quot;outer&quot; dimensions survive into the result.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



// const introContent = {

//     id: "intro",
//   title: `Manipulating Matrices`,
//   content: `Matrices support a family of operations — addition, scalar multiplication, matrix multiplication, transposition, and exponentiation — each with its own rules and dimension requirements. Matrix multiplication stands apart from the rest: it is not commutative, it demands compatible dimensions, and it admits several geometric and algebraic interpretations that make it one of the richest operations in all of mathematics.`,
// }


// const faqQuestions = {
//   obj1: {
//     question: "How do you add two matrices?",
//     answer: "Two matrices can be added only if they share the same dimensions. The sum is computed entry by entry: the (i,j) entry of A + B equals the sum of the (i,j) entries of A and B. Matrix addition is commutative and associative, with the zero matrix serving as the additive identity.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "How does matrix multiplication work?",
//     answer: "To multiply an m × n matrix A by an n × p matrix B, the number of columns of A must equal the number of rows of B. Each entry of the product AB is the dot product of a row of A with a column of B, producing an m × p result. Matrix multiplication is associative and distributive but not commutative.",
//     sectionId: "5"
//   },
//   obj3: {
//     question: "Why is matrix multiplication not commutative?",
//     answer: "Matrix multiplication is not commutative because each entry depends on the order of row-column pairings. Even for two square matrices of the same size, AB and BA generally produce different results. Additionally, the product of nonzero matrices can be zero, and cancellation does not hold unless the left factor is invertible.",
//     sectionId: "6"
//   },
//   obj4: {
//     question: "What does transposing a matrix do?",
//     answer: "Transposing a matrix converts its rows into columns and vice versa, turning an m × n matrix into an n × m matrix. The transpose reverses the order of products: (AB)ᵀ = BᵀAᵀ. A matrix equal to its own transpose is called symmetric.",
//     sectionId: "8"
//   },
//   obj5: {
//     question: "What are elementary matrices used for?",
//     answer: "An elementary matrix results from performing a single row operation on the identity matrix. Left-multiplying any matrix by an elementary matrix performs that same row operation. Every invertible matrix can be expressed as a product of elementary matrices, connecting row reduction to matrix factorization.",
//     sectionId: "10"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Matrix Operations",
//     "description": "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
//     "url": "https://www.learnmathclass.com/linear-algebra/matrix/operations",
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
//       "name": "Matrix Operations"
//     },
//     "teaches": [
//       "Matrix addition, subtraction, and scalar multiplication",
//       "Matrix multiplication definition and dimension requirements",
//       "Non-commutativity of matrix products",
//       "Transpose operation and its properties",
//       "Matrix powers and diagonalization for efficient computation",
//       "Elementary matrices and matrix decompositions"
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
//         "name": "Matrices",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Matrix Operations",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix/operations"
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
//     multiplicationLaws,
//     obj7Table,
//     obj11Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Matrix Operations: Rules & Properties | Learn Math Class",
//       description: "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/matrix/operations",
//       name: "Matrix Operations"
//     },
//   }
// }
//    }


//    export default function MatrixOperationsPage({seoData, sectionsContent, introContent, multiplicationLaws, obj7Table, obj11Table, summaryTable, faqQuestions, schemas}) {

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
//           <DiagramFrame
//             key={'obj6-diagram'}
//             id="matrix-product-laws"
//             title="Which laws survive the product"
//             source="/linear-algebra/matrix/operations"
//           >
//             <PropertyLawCard data={multiplicationLaws} theme="navy" variant="plate" />
//           </DiagramFrame>,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//           <div key={'obj7-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj7Table }} />,
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
//           <div key={'obj11-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj11Table }} />,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//           <div key={'summary-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
//         ]
//     },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },

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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Operations on Matrices</h1>
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


// tables-optimized: v4 | 2026-05-20 | 4 tables (obj6 aggregation, obj7 comparison, obj11 aggregation, obj12 summary capstone)

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import PropertyLawCard from '@/app/components/infographics/linear-algebra/PropertyLawCard'
import ObjectTypeProfile from '@/app/components/infographics/linear-algebra/ObjectTypeProfile'
import DiagramFrame from '@/app/components/infographics/DiagramsFrame'


export async function getStaticProps(){
const keyWords = [
  'matrix operations',
  'matrix addition',
  'matrix multiplication',
  'matrix transpose',
  'scalar multiplication matrix',
  'matrix multiplication rules',
  'matrix multiplication not commutative',
  'matrix powers',
  'elementary matrices',
  'matrix decomposition',
  'matrix product dimensions',
  'transpose properties',
  'linear combination matrices',
  'LU decomposition',
  'matrix arithmetic linear algebra'
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj6 — which algebraic laws survive the matrix product
  const multiplicationLaws = {
    kicker: 'Matrix · multiplication',
    title: 'Which laws survive the product',
    tallyLabel: 'laws',
    intro: 'Matrix multiplication inherits most of scalar arithmetic and breaks four rules that are deeply ingrained from it. Every entry states its condition; every failure exhibits the pair that breaks it.',
    footnote: 'Four of eight fail. Each failure traces back to the same root — a matrix can collapse directions, and a collapsed direction cannot be recovered. That is what [invertibility](!/linear-algebra/matrix/inverse) restores, and why every &quot;holds when&quot; below names it.',
    laws: [
      {
        name: 'Associativity',
        statement: '$(AB)C = A(BC)$',
        verdict: 'holds',
        requires: 'all products defined',
        note: 'Lets you drop parentheses entirely in a chain of products — the reason [matrix powers](!/linear-algebra/matrix/operations) are well defined without bracketing.',
      },
      {
        name: 'Left distribution',
        statement: '$A(B + C) = AB + AC$',
        verdict: 'holds',
        requires: '$B, C$ same shape',
      },
      {
        name: 'Right distribution',
        statement: '$(A + B)C = AC + BC$',
        verdict: 'holds',
        requires: '$A, B$ same shape',
        note: 'Left and right distribution are separate statements and each must be checked, precisely because the product does not commute.',
      },
      {
        name: 'Scalar passage',
        statement: '$c(AB) = (cA)B = A(cB)$',
        verdict: 'holds',
        requires: 'any scalar $c$',
      },
      {
        name: 'Identity',
        statement: '$AI = IA = A$',
        verdict: 'holds',
        requires: 'conformable dimensions',
        note: 'The one place commutativity is guaranteed — $I$ commutes with everything its shape allows.',
      },
      {
        name: 'Commutativity',
        statement: '$AB \\neq BA$ in general',
        verdict: 'fails',
        holdsWhen: 'both diagonal, or $B = A^{-1}$, or $B = I$',
        note: 'The most consequential failure in the subject. It is why the transpose reverses order and why [similarity](!/linear-algebra/transformations/basis-change) rather than equality is the working notion of &quot;same transformation&quot;.',
        witness: {
          label: 'Witness',
          lines: [
            'A = [[1, 2], [0, 0]],  B = [[0, 0], [3, 4]]',
            'AB = [[6, 8], [0, 0]]',
            'BA = [[0, 0], [3, 6]]',
          ],
        },
      },
      {
        name: 'Zero-product law',
        statement: '$AB = O \\nRightarrow A = O$ or $B = O$',
        verdict: 'fails',
        holdsWhen: 'either factor invertible',
        note: 'Matrices are not an integral domain. Two nonzero matrices can annihilate each other — which is what a nontrivial [null space](!/linear-algebra/vector-spaces/fundamental-spaces) means at the level of the whole product.',
        witness: {
          label: 'Witness',
          lines: [
            'A = [[1, 2], [2, 4]],  B = [[2, −4], [−1, 2]]',
            'AB = O, with neither factor zero',
          ],
        },
      },
      {
        name: 'Cancellation',
        statement: '$AB = AC \\nRightarrow B = C$',
        verdict: 'fails',
        holdsWhen: '$A$ [invertible](!/linear-algebra/matrix/inverse)',
        failsWhen: '$A$ singular',
        witness: {
          label: 'Witness',
          lines: [
            'A = [[1, 0], [0, 0]]',
            'B = [[1, 1], [1, 1]],  C = [[1, 1], [2, 2]]',
            'AB = AC = [[1, 1], [0, 0]] but B ≠ C',
          ],
        },
      },
    ],
  }

  // obj7 — comparison: four interpretations of matrix multiplication
  // obj7 — four readings of one product, by what the answer is assembled from
  const productInterpretations = {
    kicker: 'Matrix \u00B7 multiplication',
    title: 'Four ways to read the same product',
    tallyLabel: 'readings',
    intro: 'Every row computes $AB$ and every row gives the same answer. What differs is the unit being assembled \u2014 a scalar, a column, a row, or a whole rank-one matrix \u2014 and each unit makes a different fact obvious.',
    footnote: 'The definition is the entry view, but it is the one that explains least. Each of the other three is the same sum regrouped, and each is the natural reading somewhere else in the subject \u2014 the column view for [linear combinations](!/linear-algebra/vectors/linear-combinations), the outer product for [low-rank approximation](!/linear-algebra/decompositions/svd).',
    slots: [
      { key: 'unit',    label: 'assembled from' },
      { key: 'formula', label: 'formula' },
      { key: 'usedFor', label: 'natural where' },
    ],
    groups: [
      {
        heading: 'One number at a time',
        types: [
          {
            name: 'Entry view',
            anchor: '#5',
            shape: 'identity',
            condition: 'the definition',
            properties: {
              unit: 'a single scalar $(AB)_{ij}$',
              formula: '$(AB)_{ij} = \\sum_k a_{ik}b_{kj}$',
              usedFor: 'hand computation, proofs',
            },
            note: 'Row $i$ of $A$ dotted with column $j$ of $B$. Correct and unilluminating \u2014 it says how to get a number out but not what the product *is*, which is why the three readings below exist.',
          },
        ],
      },
      {
        heading: 'One vector at a time',
        types: [
          {
            name: 'Column view',
            anchor: '#7',
            shape: 'lower',
            condition: 'read $B$ column by column',
            properties: {
              unit: 'a column of $AB$',
              formula: 'column $j$ of $AB = A\\mathbf{b}_j$',
              usedFor: 'column space, transformations',
            },
            note: 'Each column of the product is $A$ applied to the corresponding column of $B$ \u2014 so every column of $AB$ is a [linear combination](!/linear-algebra/vectors/linear-combinations) of the columns of $A$. This is why $\\operatorname{Col}(AB) \\subseteq \\operatorname{Col}(A)$, and hence why the rank of a product is bounded.',
          },
          {
            name: 'Row view',
            anchor: '#7',
            shape: 'upper',
            condition: 'read $A$ row by row',
            properties: {
              unit: 'a row of $AB$',
              formula: 'row $i$ of $AB = \\mathbf{a}_i B$',
              usedFor: 'row space, elimination',
            },
            note: 'The mirror statement: every row of $AB$ is a combination of the rows of $B$. This is the reading that explains why row operations \u2014 which are left multiplications \u2014 preserve the row space.',
          },
        ],
      },
      {
        heading: 'One matrix at a time',
        types: [
          {
            name: 'Outer product sum',
            anchor: '#7',
            shape: 'dense',
            condition: 'pair column $k$ of $A$ with row $k$ of $B$',
            properties: {
              unit: 'a rank-one matrix',
              formula: '$AB = \\sum_k \\mathbf{a}_k \\mathbf{b}_k^{\\mathsf{T}}$',
              usedFor: 'SVD, low-rank approximation',
            },
            note: 'The product as a sum of rank-one pieces. Truncating that sum is exactly what [low-rank approximation](!/linear-algebra/decompositions/svd) does, which makes this the reading that matters most in practice and the one taught last.',
          },
        ],
      },
    ],
  }

  // obj11 — aggregation: matrix decompositions catalog
  const obj11Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Decomposition</th>
      <th style="${tableHeaders.aggregation}">Form</th>
      <th style="${tableHeaders.aggregation}">Requires</th>
      <th style="${tableHeaders.aggregation}">Primary use</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">LU</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LU (L lower, U upper triangular)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any square matrix (with pivoting)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solving Ax = b for many right-hand sides</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">QR</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = QR (Q orthogonal, R upper triangular)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">least squares, eigenvalue algorithms</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cholesky</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = LLᵀ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/matrix/types" style="${linkStyle}">symmetric</a> positive definite</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">half-cost LU for SPD systems</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Eigendecomposition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = PDP⁻¹ (D diagonal)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonalizable square matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">matrix powers, spectral analysis</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">SVD</td>
      <td style="padding: 12px 15px; color: #34495e;">A = UΣVᵀ (U, V orthogonal; Σ diagonal ≥ 0)</td>
      <td style="padding: 12px 15px; color: #34495e;">any matrix of any shape</td>
      <td style="padding: 12px 15px; color: #34495e;">rank, fundamental subspaces, best low-rank approximation</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — summary capstone: all operations + dimension and structure
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Operation</th>
      <th style="${tableHeaders.summary}">Input requirement</th>
      <th style="${tableHeaders.summary}">Result size</th>
      <th style="${tableHeaders.summary}">Key property</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition / subtraction</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B both m × n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">commutative; additive identity O</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar multiplication</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n; c any scalar</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributes over both matrix and scalar sum</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear combination</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all Aᵢ same m × n shape</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">turns m × n matrices into a <a href="/linear-algebra/vector-spaces" style="${linkStyle}">vector space</a> of dimension mn</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Matrix multiplication</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n, B is n × p &nbsp;(inner dims match)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × p</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">associative, NOT commutative; inner dim consumed</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Transpose</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A is m × n (no other restriction)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n × m</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(Aᵀ)ᵀ = A; (AB)ᵀ = BᵀAᵀ (order reverses)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Power Aᵏ</td>
      <td style="padding: 12px 15px; color: #34495e;">A square (n × n), k ≥ 0 (or k ∈ ℤ if invertible)</td>
      <td style="padding: 12px 15px; color: #34495e;">n × n</td>
      <td style="padding: 12px 15px; color: #34495e;">Aʲ Aᵏ = Aʲ⁺ᵏ; (AB)ᵏ ≠ Aᵏ Bᵏ in general</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS (original prose preserved verbatim) ----------

//  const sectionsContent = {
//   obj1: {
//     title: `Matrix Addition`,
//     content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

// $$(A + B)_{ij} = a_{ij} + b_{ij}$$

// For example,

// $$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

// If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

// Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Matrix Subtraction`,
//     content: `Subtraction is defined as addition of the negative:

// $$A - B = A + (-B)$$

// Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Scalar Multiplication`,
//     content: `Multiplying a matrix by a scalar $c$ scales every entry:

// $$(cA)_{ij} = c \\cdot a_{ij}$$

// For example,

// $$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

// Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Linear Combinations of Matrices`,
//     content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

// $$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

// is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Matrix Multiplication — Definition`,
//     content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

// $$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$

// The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

// ## Worked Example

// $$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

// The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

// $$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

// $$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

// $$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

// Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Matrix Multiplication — Properties`,
//     content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

// Associativity holds: $(AB)C = A(BC)$ whenever all products are defined. Distribution holds on both sides: $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$. Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

// Commutativity, however, fails. In general, $AB \\neq BA$, even when both products happen to be defined. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

// Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Matrix Multiplication — Column and Row Interpretations`,
//     content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

// The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

// $$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

// Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

// The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

// A third perspective writes the product as a sum of rank-one outer products:

// $$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

// Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `The Transpose`,
//     content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

// $$(A^T)_{ij} = a_{ji}$$

// For example,

// $$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

// The transpose satisfies $(A^T)^T = A$, distributes over addition ($(A + B)^T = A^T + B^T$), and commutes with scalar multiplication ($(cA)^T = cA^T$). The product rule reverses the order:

// $$(AB)^T = B^T A^T$$

// This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

// A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Matrix Powers`,
//     content: `For a square matrix $A$, powers are defined by repeated multiplication:

// $$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$

// The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

// One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

// Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Elementary Matrices`,
//     content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

// The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

// Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

// This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj11: {
//     title: `Matrix Decompositions`,
//     content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

// The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

// The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

// The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

// The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

// The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

// Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj12: {
//     title: `Dimension Summary`,
//     content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

// A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The "inner" dimensions must match and are consumed; the "outer" dimensions survive into the result.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }



// formulas-injected: v1 | 2026-06-16 | 13 callouts (obj1 matrix_addition direct, obj2 matrix_subtraction direct, obj3 scalar_multiplication_of_matrices direct, obj5 matrix_multiplication direct, obj6 matrix_multiplication_associativity + matrix_multiplication_distributivity + matrix_multiplication_non_commutativity inline-promote, obj8 transpose_definition direct + transpose_involution + transpose_of_sum + transpose_of_scalar_multiple inline-promote + transpose_of_product direct, obj9 matrix_power direct)

const sectionsContent = {
  obj1: {
    title: `Matrix Addition`,
    content: `Two matrices of the same size can be added entry by entry. If $A$ and $B$ are both $m \\times n$, their sum is the $m \\times n$ matrix with entries

@academic[formula_callout:matrix_addition|Matrix Addition|$$(A + B)_{ij} = a_{ij} + b_{ij}$$]@
@academic[formulas_link:/linear-algebra/formulas#matrix_addition]@

For example,

$$\\begin{pmatrix} 1 & 4 \\\\ -2 & 3 \\\\ 0 & 5 \\end{pmatrix} + \\begin{pmatrix} 3 & -1 \\\\ 6 & 0 \\\\ 2 & -4 \\end{pmatrix} = \\begin{pmatrix} 4 & 3 \\\\ 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$$

If the dimensions do not match, the sum is undefined — there is no way to add a $2 \\times 3$ matrix to a $3 \\times 2$ matrix.

Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix $O$ of the same size serves as the additive identity ($A + O = A$), and the additive inverse of $A$ is $-A = (-a_{ij})$, so $A + (-A) = O$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `Matrix Notation`,
    lead: `Capital letters, double subscripts in a fixed order, multiplication with no symbol at all — and the two reserved letters every matrix equation leans on.`,
    inherited: `Bold vectors and their components — [vector notation](!/linear-algebra/vectors/basic-operations#notation); $A^{T}$ in row-times-column form — [dot product notation](!/linear-algebra/vectors/dot-product#notation).`,
    entries: [
      {
        id: 'matrix-anatomy',
        tex: `$A = (a_{ij})$, an $m \\times n$ matrix`,
        read: `The matrix A with entries a-i-j; m by n`,
        means: `Capital letter for the whole array, lowercase with a *double subscript* for one entry — row first, column second, always: $a_{23}$ sits in row $2$, column $3$. The size $m \\times n$ reads “$m$ by $n$” and obeys the same order: rows, then columns.`,
        cases: `Subscripts extract from any matrix expression: $(A + B)_{ij}$ names one entry of the sum, the device the definitions on this page are written in. The $\\times$ in $m \\times n$ is a dimension separator — a third job for the glyph, after arithmetic and the [cross product](!/linear-algebra/vectors/cross-product#notation), and this one multiplies nothing.`,
        alsoWritten: `$[a_{ij}]$ with square brackets — many American texts; this site sets matrices in parentheses. The two bracket styles are pure typography.`,
        confusedWith: `Reversed subscripts. $a_{ij}$ and $a_{ji}$ name different entries unless the matrix is symmetric — and the transpose is exactly the operation that swaps them.`,
      },
      {
        id: 'juxtaposition-product',
        tex: `$AB$`,
        read: `A times B — written with no symbol`,
        means: `Matrix multiplication is written by juxtaposition — no dot, no cross. The bare notation hides a shape contract: $(m \\times n)(n \\times p)$ works only because the inner dimensions agree, and delivers $m \\times p$.`,
        cases: `Order is load-bearing: $AB \\neq BA$ in general, so the language splits into *pre*multiplying and *post*multiplying. Powers stack the juxtaposition: $A^n$ for square $A$, with $A^0 = I$ by convention — the identity $I$ (subscripted $I_n$ when size matters) is the matrix world's $1$, and $O$ its $0$, as in **Matrix Addition** above.`,
        alsoWritten: `$A \\cdot B$ with an explicit dot, in some European school texts — never with $\\times$, which would collide with dimensions and cross products.`,
        confusedWith: `Scalar habits. From $AB = AC$ nothing cancels; $(A+B)^2$ is $A^2 + AB + BA + B^2$, four terms — the notation looks like ordinary algebra and refuses to behave like it.`,
      },
      {
        id: 'transpose-mark',
        tex: `$A^{T}$`,
        read: `A transpose`,
        means: `The superscript $T$ is a label, not an exponent: flip rows and columns, so $(A^{T})_{ij} = a_{ji}$. The operation itself is **The Transpose** below.`,
        cases: `It reverses products — $(AB)^{T} = B^{T}A^{T}$, order flipped — and characterizes whole [matrix types](!/linear-algebra/matrix/types) in one equation: $A = A^{T}$ is symmetry, $A^{T} = -A$ skew-symmetry, $Q^{T}Q = I$ orthogonality.`,
        alsoWritten: `$A^{\\top}$ with the sans-serif glyph; $A'$ in econometrics and older texts — the prime again, moonlighting far from [derivatives](!/calculus/derivatives/function#notation).`,
        confusedWith: `A power. $A^{T}$ multiplies nothing $T$ times; the same corner of the symbol carries $A^{n}$ (a genuine power), $A^{-1}$ (the [inverse](!/linear-algebra/matrix/inverse)) and $A^{T}$ (a flip) — three superscripts, three unrelated jobs.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/matrix`,
    parentLabel: `Matrices`,
  },
  obj2: {
    title: `Matrix Subtraction`,
    content: `Subtraction is defined as addition of the negative:

@academic[formula_callout:matrix_subtraction|Matrix Subtraction|$$A - B = A + (-B)$$]@
@academic[formulas_link:/linear-algebra/formulas#matrix_subtraction]@

Entry by entry, $(A - B)_{ij} = a_{ij} - b_{ij}$. The same dimension requirement applies — both matrices must have identical shapes. There is nothing deeper here than combining addition and negation, but it appears often enough to warrant its own notation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Scalar Multiplication`,
    content: `Multiplying a matrix by a scalar $c$ scales every entry:

@academic[formula_callout:scalar_multiplication_of_matrices|Scalar Multiplication of Matrices|$$(cA)_{ij} = c \\cdot a_{ij}$$]@
@academic[formulas_link:/linear-algebra/formulas#scalar_multiplication_of_matrices]@

For example,

$$-2 \\begin{pmatrix} 1 & 3 & -4 \\\\ 0 & 5 & 2 \\end{pmatrix} = \\begin{pmatrix} -2 & -6 & 8 \\\\ 0 & -10 & -4 \\end{pmatrix}$$

Scalar multiplication distributes over matrix addition ($c(A + B) = cA + cB$), distributes over scalar addition ($(c + d)A = cA + dA$), associates with itself ($c(dA) = (cd)A$), and has $1$ as its identity ($1 \\cdot A = A$). Multiplying by $0$ produces the zero matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Linear Combinations of Matrices`,
    content: `Given matrices $A_1, A_2, \\dots, A_k$ of the same size and scalars $c_1, c_2, \\dots, c_k$, the expression

$$c_1 A_1 + c_2 A_2 + \\cdots + c_k A_k$$

is a linear combination of matrices. Addition and scalar multiplication together give the set of all $m \\times n$ matrices the structure of a [vector space](!/linear-algebra/vector-spaces). The dimension of this space is $mn$ — one degree of freedom for each entry. The standard basis consists of the $mn$ matrices that have a single $1$ in one position and zeros everywhere else.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Matrix Multiplication — Definition`,
    content: `For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ is an $m \\times p$ matrix whose $(i,j)$ entry is the [dot product](!/linear-algebra/vectors/dot-product) of row $i$ of $A$ with column $j$ of $B$:

@academic[formula_callout:matrix_multiplication|Matrix Multiplication|$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$]@
@academic[formulas_link:/linear-algebra/formulas#matrix_multiplication]@

The number of columns of $A$ must equal the number of rows of $B$. If this compatibility condition fails, the product is undefined.

## Worked Example

$$\\begin{pmatrix} 1 & 0 & 3 \\\\ 2 & -1 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 1 \\\\ 2 & -3 \\\\ 0 & 6 \\end{pmatrix}$$

The left matrix is $2 \\times 3$ and the right is $3 \\times 2$, so the product is $2 \\times 2$. Computing each entry:

$$(1)(5) + (0)(2) + (3)(0) = 5, \\quad (1)(1) + (0)(-3) + (3)(6) = 19$$

$$(2)(5) + (-1)(2) + (4)(0) = 8, \\quad (2)(1) + (-1)(-3) + (4)(6) = 29$$

$$AB = \\begin{pmatrix} 5 & 19 \\\\ 8 & 29 \\end{pmatrix}$$

Each entry required $n = 3$ multiplications and $n - 1 = 2$ additions. The full product required $m \\times p = 4$ such computations.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Matrix Multiplication — Properties`,
    content: `Matrix multiplication obeys several familiar algebraic rules and violates one that is deeply ingrained from scalar arithmetic.

Associativity holds whenever all products are defined:

@academic[formula_callout:matrix_multiplication_associativity|Matrix Multiplication Associativity|$$(AB)C = A(BC)$$]@
@academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_associativity]@

Distribution holds on both sides:

@academic[formula_callout:matrix_multiplication_distributivity|Matrix Multiplication Distributivity|$$A(B + C) = AB + AC, \\quad (A + B)C = AC + BC$$]@
@academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_distributivity]@

Scalars pass through freely: $c(AB) = (cA)B = A(cB)$. The identity matrix satisfies $AI = IA = A$ whenever the dimensions are compatible.

Commutativity, however, fails:

@academic[formula_callout:matrix_multiplication_non_commutativity|Matrix Multiplication Non-Commutativity|$$AB \\neq BA \\text{ in general}$$]@
@academic[formulas_link:/linear-algebra/formulas#matrix_multiplication_non_commutativity]@

Even when both products happen to be defined, they generally produce different results. For a concrete counterexample, take $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 0 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 0 \\\\ 3 & 4 \\end{pmatrix}$. Then $AB = \\begin{pmatrix} 6 & 8 \\\\ 0 & 0 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 0 & 0 \\\\ 3 & 6 \\end{pmatrix}$.

Two further properties distinguish matrix multiplication from scalar multiplication. The product of two nonzero matrices can be zero: if $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & -4 \\\\ -1 & 2 \\end{pmatrix}$, then $AB = O$ even though neither $A$ nor $B$ is zero. Cancellation also fails: $AB = AC$ does not imply $B = C$ unless $A$ is [invertible](!/linear-algebra/matrix/inverse).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Matrix Multiplication — Column and Row Interpretations`,
    content: `The entry-by-entry formula is the most common way to define matrix multiplication, but two alternative viewpoints often provide sharper insight.

The column interpretation says that column $j$ of $AB$ is obtained by multiplying $A$ times column $j$ of $B$:

$$AB = \\begin{pmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 & \\cdots & A\\mathbf{b}_p \\end{pmatrix}$$

Each column of the product is a linear combination of the columns of $A$, with weights given by the corresponding column of $B$. This is the view that connects matrix multiplication to [linear transformations](!/linear-algebra/transformations): the product $AB$ applies the transformation $A$ to each column of $B$ independently.

The row interpretation says that row $i$ of $AB$ equals row $i$ of $A$ times the entire matrix $B$. Each row of the product is a linear combination of the rows of $B$, weighted by the entries in the corresponding row of $A$.

A third perspective writes the product as a sum of rank-one outer products:

$$AB = \\sum_{k=1}^{n} (\\text{column } k \\text{ of } A)(\\text{row } k \\text{ of } B)$$

Each term is an $m \\times p$ matrix of [rank](!/linear-algebra/matrix/rank) at most one, and their sum is the full product. This decomposition appears in low-rank approximation theory and in the analysis of the singular value decomposition.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `The Transpose`,
    content: `The transpose of an $m \\times n$ matrix $A$ is the $n \\times m$ matrix $A^T$ obtained by converting rows into columns:

@academic[formula_callout:transpose_definition|Transpose Definition|$$(A^T)_{ij} = a_{ji}$$]@
@academic[formulas_link:/linear-algebra/formulas#transpose_definition]@

For example,

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\quad \\Longrightarrow \\quad A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}$$

Applying the transpose twice recovers the original matrix:

@academic[formula_callout:transpose_involution|Transpose Involution|$$(A^T)^T = A$$]@
@academic[formulas_link:/linear-algebra/formulas#transpose_involution]@

The transpose distributes over addition:

@academic[formula_callout:transpose_of_sum|Transpose of Sum|$$(A + B)^T = A^T + B^T$$]@
@academic[formulas_link:/linear-algebra/formulas#transpose_of_sum]@

and commutes with scalar multiplication:

@academic[formula_callout:transpose_of_scalar_multiple|Transpose of Scalar Multiple|$$(cA)^T = c\\, A^T$$]@
@academic[formulas_link:/linear-algebra/formulas#transpose_of_scalar_multiple]@

The product rule reverses the order:

@academic[formula_callout:transpose_of_product|Transpose of Product|$$(AB)^T = B^T A^T$$]@
@academic[formulas_link:/linear-algebra/formulas#transpose_of_product]@

This reversal is a frequent source of errors and is worth memorizing as a pattern: transposing a product is like reading it backward.

A matrix satisfying $A = A^T$ is called [symmetric](!/linear-algebra/matrix/types). For any matrix $A$ of any shape, the products $A^T A$ and $AA^T$ are both symmetric — this is immediate from the product rule, since $(A^T A)^T = A^T (A^T)^T = A^T A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Matrix Powers`,
    content: `For a square matrix $A$, powers are defined by repeated multiplication:

@academic[formula_callout:matrix_power|Matrix Power|$$A^0 = I, \\quad A^1 = A, \\quad A^k = \\underbrace{A \\cdot A \\cdots A}_{k \\text{ factors}}$$]@
@academic[formulas_link:/linear-algebra/formulas#matrix_power]@

The usual exponent laws hold: $A^j A^k = A^{j+k}$ and $(A^j)^k = A^{jk}$. When $A$ is invertible, negative powers are defined as $A^{-k} = (A^{-1})^k$, extending the exponent laws to all integers.

One rule from scalar arithmetic does not carry over. Since matrix multiplication is not commutative, the identity $(AB)^k = A^k B^k$ is false in general. Expanding $(AB)^2 = ABAB$, there is no way to rearrange this into $A^2 B^2 = AABB$ without commutativity.

Powers of specific matrix types are particularly well-behaved. For a diagonal matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the $k$-th power is $D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$ — each diagonal entry is raised to the $k$-th power independently. This simplicity is one of the main reasons [diagonalization](!/linear-algebra/eigen/diagonalization) is so useful: writing $A = PDP^{-1}$ gives $A^k = PD^kP^{-1}$, reducing an expensive matrix power to a cheap diagonal power.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Elementary Matrices`,
    content: `An elementary matrix is the result of performing a single row operation on the identity matrix. There are three types, corresponding to the three row operations: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another.

The key property is that left-multiplying a matrix $A$ by an elementary matrix $E$ performs the corresponding row operation on $A$. If $E$ swaps rows $2$ and $3$ of the identity, then $EA$ swaps rows $2$ and $3$ of $A$. If $E$ scales row $1$ of the identity by $5$, then $EA$ scales row $1$ of $A$ by $5$.

Every elementary matrix is invertible, and its inverse is another elementary matrix of the same type: the inverse of a row swap is the same row swap, the inverse of scaling by $k$ is scaling by $1/k$, and the inverse of adding $c$ times row $i$ to row $j$ is subtracting $c$ times row $i$ from row $j$.

This leads to a structural result: every invertible matrix can be written as a product of elementary matrices. Since [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) reduces an invertible matrix to the identity through a sequence of row operations, each operation corresponds to an elementary matrix, and reversing the sequence expresses the original matrix as their product. This factorization is more conceptual than computational, but it underpins the theoretical foundations of the [determinant](!/linear-algebra/determinants) and the inverse.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Matrix Decompositions`,
    content: `A matrix decomposition (or factorization) expresses a matrix as a product of simpler matrices with known structure. Decompositions are among the most powerful tools in computational linear algebra, converting hard problems into sequences of easy ones.

The LU decomposition writes $A = LU$ where $L$ is lower triangular and $U$ is upper triangular. It captures the essence of Gaussian elimination in matrix form and makes solving [linear systems](!/linear-algebra/linear-systems) with multiple right-hand sides efficient: once $L$ and $U$ are known, each system reduces to two triangular solves.

The QR decomposition writes $A = QR$ where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $R$ is upper triangular. It is the foundation of least-squares computation and several eigenvalue algorithms.

The Cholesky decomposition writes $A = LL^T$ for symmetric positive definite matrices, achieving the work of LU in roughly half the computation by exploiting symmetry.

The eigendecomposition writes $A = PDP^{-1}$ where $D$ is diagonal, placing the [eigenvalues](!/linear-algebra/eigen) on the diagonal and the eigenvectors in the columns of $P$. It applies only to diagonalizable matrices.

The singular value decomposition writes $A = U\\Sigma V^T$ where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with nonnegative entries. Unlike the eigendecomposition, the SVD exists for every matrix of every shape. It reveals the rank, the fundamental subspaces, and the best low-rank approximation to $A$, making it one of the most broadly applicable tools in the subject.

Each of these [decompositions](!/linear-algebra/decompositions) has its own page with full derivations and worked examples.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj12: {
    title: `Dimension Summary`,
    content: `The dimension requirements for each operation are worth collecting in one place. Addition and subtraction require both matrices to share the same $m \\times n$ dimensions, and the result is $m \\times n$. Scalar multiplication imposes no restriction and preserves the original dimensions. The product $AB$ requires the column count of $A$ to match the row count of $B$ — if $A$ is $m \\times n$ and $B$ is $n \\times p$, the result is $m \\times p$. The transpose of an $m \\times n$ matrix is $n \\times m$. Powers $A^k$ require $A$ to be square and produce a matrix of the same size.

A common source of confusion is the product rule. The product of two $n \\times n$ matrices is $n \\times n$, but the product of a $2 \\times 3$ matrix with a $3 \\times 5$ matrix is $2 \\times 5$. The &quot;inner&quot; dimensions must match and are consumed; the &quot;outer&quot; dimensions survive into the result.`,
    before: ``,
    after: ``,
    link: ``,
  },
}



const introContent = {

    id: "intro",
  title: `Manipulating Matrices`,
  content: `Matrices support a family of operations — addition, scalar multiplication, matrix multiplication, transposition, and exponentiation — each with its own rules and dimension requirements. Matrix multiplication stands apart from the rest: it is not commutative, it demands compatible dimensions, and it admits several geometric and algebraic interpretations that make it one of the richest operations in all of mathematics.`,
}


const faqQuestions = {
  obj1: {
    question: "How do you add two matrices?",
    answer: "Two matrices can be added only if they share the same dimensions. The sum is computed entry by entry: the (i,j) entry of A + B equals the sum of the (i,j) entries of A and B. Matrix addition is commutative and associative, with the zero matrix serving as the additive identity.",
    sectionId: "1"
  },
  obj2: {
    question: "How does matrix multiplication work?",
    answer: "To multiply an m × n matrix A by an n × p matrix B, the number of columns of A must equal the number of rows of B. Each entry of the product AB is the dot product of a row of A with a column of B, producing an m × p result. Matrix multiplication is associative and distributive but not commutative.",
    sectionId: "5"
  },
  obj3: {
    question: "Why is matrix multiplication not commutative?",
    answer: "Matrix multiplication is not commutative because each entry depends on the order of row-column pairings. Even for two square matrices of the same size, AB and BA generally produce different results. Additionally, the product of nonzero matrices can be zero, and cancellation does not hold unless the left factor is invertible.",
    sectionId: "6"
  },
  obj4: {
    question: "What does transposing a matrix do?",
    answer: "Transposing a matrix converts its rows into columns and vice versa, turning an m × n matrix into an n × m matrix. The transpose reverses the order of products: (AB)ᵀ = BᵀAᵀ. A matrix equal to its own transpose is called symmetric.",
    sectionId: "8"
  },
  obj5: {
    question: "What are elementary matrices used for?",
    answer: "An elementary matrix results from performing a single row operation on the identity matrix. Left-multiplying any matrix by an elementary matrix performs that same row operation. Every invertible matrix can be expressed as a product of elementary matrices, connecting row reduction to matrix factorization.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Matrix Operations",
    "description": "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
    "url": "https://www.learnmathclass.com/linear-algebra/matrix/operations",
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
      "name": "Matrix Operations"
    },
    "teaches": [
      "Matrix addition, subtraction, and scalar multiplication",
      "Matrix multiplication definition and dimension requirements",
      "Non-commutativity of matrix products",
      "Transpose operation and its properties",
      "Matrix powers and diagonalization for efficient computation",
      "Elementary matrices and matrix decompositions"
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
        "name": "Matrix Operations",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix/operations"
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
    multiplicationLaws,
    productInterpretations,
    obj11Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Matrix Operations: Rules & Properties | Learn Math Class",
      description: "Master matrix operations — addition, scalar multiplication, matrix multiplication, transpose, powers, and decompositions. Includes dimension rules and worked examples.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/matrix/operations",
      name: "Matrix Operations"
    },
  }
}
   }


   export default function MatrixOperationsPage({seoData, sectionsContent, introContent, multiplicationLaws, productInterpretations, obj11Table, summaryTable, faqQuestions, schemas}) {

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
          <DiagramFrame
            key={'obj6-diagram'}
            id="matrix-product-laws"
            title="Which laws survive the product"
            source="/linear-algebra/matrix/operations"
          >
            <PropertyLawCard data={multiplicationLaws} theme="navy" variant="plate" />
          </DiagramFrame>,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <DiagramFrame
            key={'obj7-diagram'}
            id="product-interpretations"
            title="Four ways to read the same product"
            source="/linear-algebra/matrix/operations"
          >
            <ObjectTypeProfile data={productInterpretations} theme="navy" variant="stack" />
          </DiagramFrame>,
          `The two vector readings are worth holding together, because between them they explain the rank bound. Every column of $AB$ is a combination of the columns of $A$, so the column space of the product sits inside that of $A$; every row is a combination of the rows of $B$, so the row space sits inside that of $B$. Rank is the dimension of either, so $\\operatorname{rank}(AB)$ cannot exceed the smaller of the two — which is the inequality stated without proof on the [rank](!/linear-algebra/matrix/rank) page.`,
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
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'obj11-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj11Table }} />,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Operations on Matrices</h1>
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