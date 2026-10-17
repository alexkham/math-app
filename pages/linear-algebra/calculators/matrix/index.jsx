import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import MatrixCalculatorAll from '@/app/components/calculators/matrix-calculator/MatrixCalculatorAll'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

/* calculators-mesh: finished 2026-10-16 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/linear-algebra/calculators/matrix" in calculators-mesh-registry.json (same folder): 5 usage sections, each with a demo; 21 panel notes; 27 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps(){
const keyWords = [
  'matrix calculator',
  'matrix operations calculator',
  'matrix determinant calculator',
  'matrix inverse calculator',
  'matrix multiplication calculator',
  'matrix transpose',
  'matrix trace calculator',
  'matrix rank calculator',
  'LU decomposition calculator',
  'Kronecker product calculator',
  'Hadamard product matrix',
  'matrix scalar multiplication',
  'matrix power calculator',
  'commutator matrix calculator',
  'linear algebra calculator'
];

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

//   const descriptions = {
//   single: {
//     _default:
//       'Single matrix operations work on one matrix at a time. Choose an operation to see a detailed explanation.',
//     Transpose:
//       'The transpose flips a matrix over its diagonal, turning rows into columns and vice versa: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62. If A is m\u00D7n, then A\u1D40 is n\u00D7m. Transposing twice returns the original matrix.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#1) \u2193@',
//     Determinant:
//       'The determinant is a scalar value that encodes properties of a square matrix. It is zero if and only if the matrix is singular (non-invertible). Geometrically, |det(A)| gives the scale factor by which A transforms volumes.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#2) \u2193@',
//     Inverse:
//       'The inverse A\u207B\u00B9 satisfies AA\u207B\u00B9 = A\u207B\u00B9A = I. It exists only for square matrices with non-zero determinant. Computing the inverse uses Gauss-Jordan elimination on the augmented matrix [A | I].\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#3) \u2193@',
//     Trace:
//       'The trace is the sum of the diagonal elements: tr(A) = \u03A3 a\u1D62\u1D62. It equals the sum of the eigenvalues and is invariant under similarity transformations. Defined only for square matrices.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#4) \u2193@',
//     Rank:
//       'The rank is the number of linearly independent rows (equivalently, columns). Found by row reducing to echelon form and counting pivot positions. Rank tells you the dimension of the column space.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#5) \u2193@',
//     'LU Decomposition':
//       'LU decomposition factors A into PA = LU where P is a permutation matrix, L is lower triangular with 1s on the diagonal, and U is upper triangular. Used for efficient solving of multiple systems with the same coefficient matrix.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#6) \u2193@',
//   },
//   two: {
//     _default:
//       'Two-matrix operations take a pair of matrices and produce a new matrix or scalar. Choose an operation to learn more.',
//     Addition:
//       'Matrix addition sums corresponding elements: (A+B)\u1D62\u2C7C = a\u1D62\u2C7C + b\u1D62\u2C7C. Both matrices must have identical dimensions. Addition is commutative (A+B = B+A) and associative.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#7) \u2193@',
//     Subtraction:
//       'Matrix subtraction finds the difference of corresponding elements: (A\u2212B)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 b\u1D62\u2C7C. Both matrices must have identical dimensions.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#8) \u2193@',
//     Multiplication:
//       'Matrix multiplication AB requires columns of A to equal rows of B. The result has dimensions m\u00D7p for m\u00D7n and n\u00D7p matrices. Element (i,j) of AB is the dot product of row i of A with column j of B. Not commutative in general.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#9) \u2193@',
//     'Element-wise Multiplication':
//       'The Hadamard product (A\u2299B) multiplies corresponding elements: (A\u2299B)\u1D62\u2C7C = a\u1D62\u2C7C \u00B7 b\u1D62\u2C7C. Both matrices must have identical dimensions. Unlike standard multiplication, it is commutative.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#10) \u2193@',
//     'Kronecker Product':
//       'The Kronecker product A\u2297B creates a block matrix by replacing each element a\u1D62\u2C7C of A with the block a\u1D62\u2C7C\u00B7B. If A is m\u00D7n and B is p\u00D7q, the result is mp\u00D7nq.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#11) \u2193@',
//     Commutator:
//       'The commutator [A,B] = AB \u2212 BA measures how much the order of multiplication matters. It is zero when A and B commute. Important in Lie algebra and quantum mechanics.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#12) \u2193@',
//     'Anti-commutator':
//       'The anti-commutator {A,B} = AB + BA is the symmetric counterpart of the commutator. Used extensively in quantum mechanics, particularly for fermionic operators.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#13) \u2193@',
//   },
//   scalar: {
//     _default:
//       'Scalar operations combine a matrix with a single number. Choose an operation to see details.',
//     'Scalar Multiplication':
//       'Scalar multiplication multiplies every element of the matrix by the scalar: (cA)\u1D62\u2C7C = c \u00B7 a\u1D62\u2C7C. It scales the entire matrix uniformly. The determinant of cA equals c\u207F \u00B7 det(A) for an n\u00D7n matrix.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#14) \u2193@',
//     'Scalar Addition':
//       'Scalar addition adds the scalar to every element of the matrix: (A + c)\u1D62\u2C7C = a\u1D62\u2C7C + c. This shifts every entry by the same amount.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#15) \u2193@',
//     'Scalar Subtraction':
//       'Scalar subtraction subtracts the scalar from every element: (A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 c.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#16) \u2193@',
//     'Matrix Power (Scalar)':
//       'Matrix power raises a square matrix to a non-negative integer exponent by repeated multiplication: A\u207F = A\u00B7A\u00B7\u2026\u00B7A (n times). A\u2070 = I (identity). Computed efficiently using exponentiation by squaring.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Read more below](#17) \u2193@',
//   },
//   system: {
//     _default:
//       'System operations are available in the dedicated Linear Systems Calculator for a more complete experience.',
//   },
// };

const matrixExplanations = {
  single: {
    _default:
      'Single matrix operations work on one matrix at a time. Choose an operation to see a detailed explanation. [All single-matrix operations](!#single-matrix-operations)',
    Transpose:
      'The transpose flips a matrix over its diagonal, turning rows into columns and vice versa: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62. If A is m\u00D7n, then A\u1D40 is n\u00D7m. Transposing twice returns the original matrix. [Learn more about matrix transpose](!#matrix-transpose) · [All single-matrix operations](!#single-matrix-operations)',
    Determinant:
      'The determinant is a scalar value that encodes properties of a square matrix. It is zero if and only if the matrix is singular (non-invertible). Geometrically, |det(A)| gives the scale factor by which A transforms volumes. [Learn more about matrix determinant](!#matrix-determinant) · [All single-matrix operations](!#single-matrix-operations)',
    Inverse:
      'The inverse A\u207B\u00B9 satisfies AA\u207B\u00B9 = A\u207B\u00B9A = I. It exists only for square matrices with non-zero determinant. Computing the inverse uses Gauss-Jordan elimination on the augmented matrix [A | I]. [Learn more about matrix inverse](!#matrix-inverse) · [All single-matrix operations](!#single-matrix-operations)',
    Trace:
      'The trace is the sum of the diagonal elements: tr(A) = \u03A3 a\u1D62\u1D62. It equals the sum of the eigenvalues and is invariant under similarity transformations. Defined only for square matrices. [Learn more about matrix trace](!#matrix-trace) · [All single-matrix operations](!#single-matrix-operations)',
    Rank:
      'The rank is the number of linearly independent rows (equivalently, columns). Found by row reducing to echelon form and counting pivot positions. Rank tells you the dimension of the column space. [Learn more about matrix rank](!#matrix-rank) · [All single-matrix operations](!#single-matrix-operations)',
    'LU Decomposition':
      'LU decomposition factors A into PA = LU where P is a permutation matrix, L is lower triangular with 1s on the diagonal, and U is upper triangular. Used for efficient solving of multiple systems with the same coefficient matrix. [Learn more about LU decomposition](!#lu-decomposition) · [All single-matrix operations](!#single-matrix-operations)',
  },
  two: {
    _default:
      'Two-matrix operations take a pair of matrices and produce a new matrix or scalar. Choose an operation to learn more. [All two-matrix operations](!#two-matrix-operations)',
    Addition:
      'Matrix addition sums corresponding elements: (A+B)\u1D62\u2C7C = a\u1D62\u2C7C + b\u1D62\u2C7C. Both matrices must have identical dimensions. Addition is commutative (A+B = B+A) and associative. [Learn more about matrix addition](!#matrix-addition) · [All two-matrix operations](!#two-matrix-operations)',
    Subtraction:
      'Matrix subtraction finds the difference of corresponding elements: (A\u2212B)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 b\u1D62\u2C7C. Both matrices must have identical dimensions. [Learn more about matrix subtraction](!#matrix-subtraction) · [All two-matrix operations](!#two-matrix-operations)',
    Multiplication:
      'Matrix multiplication AB requires columns of A to equal rows of B. The result has dimensions m\u00D7p for m\u00D7n and n\u00D7p matrices. Element (i,j) of AB is the dot product of row i of A with column j of B. Not commutative in general. [Learn more about matrix multiplication](!#matrix-multiplication) · [All two-matrix operations](!#two-matrix-operations)',
    'Element-wise Multiplication':
      'The Hadamard product (A\u2299B) multiplies corresponding elements: (A\u2299B)\u1D62\u2C7C = a\u1D62\u2C7C \u00B7 b\u1D62\u2C7C. Both matrices must have identical dimensions. Unlike standard multiplication, it is commutative. [Learn more about the Hadamard product](!#element-wise-hadamard-product) · [All two-matrix operations](!#two-matrix-operations)',
    'Kronecker Product':
      'The Kronecker product A\u2297B creates a block matrix by replacing each element a\u1D62\u2C7C of A with the block a\u1D62\u2C7C\u00B7B. If A is m\u00D7n and B is p\u00D7q, the result is mp\u00D7nq. [Learn more about kronecker product](!#kronecker-product) · [All two-matrix operations](!#two-matrix-operations)',
    Commutator:
      'The commutator [A,B] = AB \u2212 BA measures how much the order of multiplication matters. It is zero when A and B commute. Important in Lie algebra and quantum mechanics. [Learn more about commutator](!#commutator) · [All two-matrix operations](!#two-matrix-operations)',
    'Anti-commutator':
      'The anti-commutator {A,B} = AB + BA is the symmetric counterpart of the commutator. Used extensively in quantum mechanics, particularly for fermionic operators. [Learn more about anti commutator](!#anti-commutator) · [All two-matrix operations](!#two-matrix-operations)',
  },
  scalar: {
    _default:
      'Scalar operations combine a matrix with a single number. Choose an operation to see details. [All scalar operations](!#scalar-operations)',
    'Scalar Multiplication':
      'Scalar multiplication multiplies every element of the matrix by the scalar: (cA)\u1D62\u2C7C = c \u00B7 a\u1D62\u2C7C. It scales the entire matrix uniformly. The determinant of cA equals c\u207F \u00B7 det(A) for an n\u00D7n matrix. [Learn more about scalar multiplication](!#scalar-multiplication) · [All scalar operations](!#scalar-operations)',
    'Scalar Addition':
      'Scalar addition adds the scalar to every element of the matrix: (A + c)\u1D62\u2C7C = a\u1D62\u2C7C + c. This shifts every entry by the same amount. [Learn more about scalar addition](!#scalar-addition) · [All scalar operations](!#scalar-operations)',
    'Scalar Subtraction':
      'Scalar subtraction subtracts the scalar from every element: (A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 c. [Learn more about scalar subtraction](!#scalar-subtraction) · [All scalar operations](!#scalar-operations)',
    'Matrix Power (Scalar)':
      'Matrix power raises a square matrix to a non-negative integer exponent by repeated multiplication: A\u207F = A\u00B7A\u00B7\u2026\u00B7A (n times). A\u2070 = I (identity). Computed efficiently using exponentiation by squaring. [Learn more about matrix power](!#matrix-power) · [All scalar operations](!#scalar-operations)',
  },
  system: {
    _default:
      'System operations are available in the dedicated Linear Systems Calculator for a more complete experience. [Learn more about the categories](!#choosing-a-category-and-an-operation)',
  },
};


const sectionsContent = {

  obj1: {
    title: `Matrix Transpose`,
    content: `The transpose of a matrix $A$ swaps its rows and columns. If $A$ is an $m \\times n$ matrix, then $A^T$ is $n \\times m$, with each entry satisfying $(A^T)_{ij} = A_{ji}$.

$$A^T_{ij} = A_{ji}$$

Key properties include $(A^T)^T = A$, $(AB)^T = B^T A^T$, and $(A + B)^T = A^T + B^T$. A matrix equal to its own transpose is called **symmetric**. The transpose is fundamental in computing **dot products**, defining **orthogonal matrices**, and constructing the **normal equation** for least squares problems.

The lesson covers it in [The transpose](!/linear-algebra/matrix/operations#8), and the symmetric case in [Symmetric matrices](!/linear-algebra/matrix/types#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Matrix Determinant`,
    content: `The determinant is a scalar value computed from a **square matrix** that captures essential properties of the transformation it represents. A matrix is **invertible** if and only if its determinant is nonzero.

For a $2 \\times 2$ matrix:

$$\\det(A) = a_{11}a_{22} - a_{12}a_{21}$$

For larger matrices, the determinant is computed via cofactor expansion or row reduction. Geometrically, $|\\det(A)|$ measures the factor by which the matrix scales areas or volumes. Key properties: $\\det(AB) = \\det(A)\\det(B)$, $\\det(A^T) = \\det(A)$, and $\\det(cA) = c^n \\det(A)$ for an $n \\times n$ matrix.

See [The 2×2 formula](!/linear-algebra/determinants#2), [The 3×3 formula](!/linear-algebra/determinants#3) and [Singular and nonsingular matrices](!/linear-algebra/determinants#5) in the determinants lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Matrix Inverse`,
    content: `The inverse of a square matrix $A$, denoted $A^{-1}$, satisfies $AA^{-1} = A^{-1}A = I$. A matrix has an inverse only when its **determinant** is nonzero.

$$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$$

The calculator finds the inverse using **Gauss-Jordan elimination** on the augmented matrix $[A | I]$. Row operations transform the left side into $I$, and the right side becomes $A^{-1}$. The inverse is used to solve **linear systems** ($x = A^{-1}b$), compute **matrix equations**, and analyze transformations.

See [Definition of the inverse](!/linear-algebra/matrix/inverse#1), [Computing the inverse by row reduction](!/linear-algebra/matrix/inverse#4) and [When does the inverse exist](!/linear-algebra/matrix/inverse#3).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Matrix Trace`,
    content: `The trace of a square matrix is the sum of its diagonal elements:

$$\\text{tr}(A) = \\sum_{i=1}^{n} a_{ii}$$

The trace has several important properties. It is linear: $\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)$ and $\\text{tr}(cA) = c \\cdot \\text{tr}(A)$. It is cyclic: $\\text{tr}(ABC) = \\text{tr}(BCA) = \\text{tr}(CAB)$. The trace equals the sum of the **eigenvalues** of the matrix, making it useful in spectral analysis and matrix diagnostics.

See [Definition](!/linear-algebra/matrix/trace#1), [Linearity](!/linear-algebra/matrix/trace#2), [The cyclic property](!/linear-algebra/matrix/trace#4) and [Trace and eigenvalues](!/linear-algebra/matrix/trace#5) in the trace lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Matrix Rank`,
    content: `The rank of a matrix is the number of **linearly independent** rows or columns. It equals the dimension of the **column space** (or row space) and is found by reducing the matrix to row echelon form and counting pivot positions.

$$\\text{rank}(A) \\leq \\min(m, n)$$

A matrix with rank equal to its smaller dimension has full rank. Rank determines whether a **linear system** $Ax = b$ has a unique solution, infinitely many solutions, or no solution. The rank-nullity theorem states $\\text{rank}(A) + \\text{nullity}(A) = n$ where $n$ is the number of columns.

See [What rank measures](!/linear-algebra/matrix/rank#1), [Computing rank via row reduction](!/linear-algebra/matrix/rank#3) and [The rank-nullity theorem](!/linear-algebra/matrix/rank#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `LU Decomposition`,
    content: `LU decomposition factors a square matrix into a product of a lower triangular matrix $L$ and an upper triangular matrix $U$, with a permutation matrix $P$ tracking row swaps:

$$PA = LU$$

$L$ has ones on the diagonal with elimination multipliers below. $U$ is the result of **Gaussian elimination**. This factorization is efficient for solving multiple systems with the same coefficient matrix but different right-hand sides, since forward and back substitution are much cheaper than full elimination. LU decomposition is also used to compute **determinants** efficiently: $\\det(A) = \\det(L) \\cdot \\det(U) \\cdot \\det(P)$.

See [What LU decomposition is](!/linear-algebra/decompositions/lower-upper#1), [Partial pivoting: PA = LU](!/linear-algebra/decompositions/lower-upper#5) and [Solving systems with LU](!/linear-algebra/decompositions/lower-upper#6).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Matrix Addition`,
    content: `Matrix addition sums corresponding elements of two matrices with identical dimensions. If $A$ and $B$ are both $m \\times n$:

$$(A + B)_{ij} = a_{ij} + b_{ij}$$

Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix acts as the additive identity. Subtraction works identically, replacing each sum with a difference: $(A - B)_{ij} = a_{ij} - b_{ij}$. Both operations preserve matrix dimensions.

See [Matrix addition](!/linear-algebra/matrix/operations#1) and [Matrix arithmetic at a glance](!/linear-algebra/matrix#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Matrix Subtraction`,
    content: `Matrix subtraction computes the element-wise difference between two matrices of the same dimensions:

$$(A - B)_{ij} = a_{ij} - b_{ij}$$

Subtraction is equivalent to adding the negation: $A - B = A + (-B)$. Unlike addition, subtraction is not commutative: $A - B \\neq B - A$ in general. The result has the same dimensions as both input matrices. Subtraction is used in computing **residuals**, error matrices, and the **commutator** operation $[A, B] = AB - BA$.

See [Matrix subtraction](!/linear-algebra/matrix/operations#2) in the operations lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Matrix Multiplication`,
    content: `Matrix multiplication combines an $m \\times n$ matrix $A$ with an $n \\times p$ matrix $B$ to produce an $m \\times p$ result. The number of columns in $A$ must equal the number of rows in $B$.

$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$

Each entry is the **dot product** of a row from $A$ with a column from $B$. Multiplication is associative and distributive over addition, but not commutative: $AB \\neq BA$ in general. Matrix multiplication models composition of **linear transformations** and is the core operation in systems of equations, computer graphics, and machine learning.

See [Matrix multiplication: definition](!/linear-algebra/matrix/operations#5), [Matrix multiplication: properties](!/linear-algebra/matrix/operations#6) and the [column and row interpretations](!/linear-algebra/matrix/operations#7).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Element-wise (Hadamard) Product`,
    content: `The Hadamard product, denoted $A \\odot B$, multiplies corresponding elements of two matrices with the same dimensions:

$$(A \\odot B)_{ij} = a_{ij} \\cdot b_{ij}$$

Unlike standard **matrix multiplication**, the Hadamard product is commutative ($A \\odot B = B \\odot A$) and preserves dimensions. It appears in signal processing, neural network computations (gradient masking, attention mechanisms), and statistics. The Schur product theorem states that if $A$ and $B$ are both positive semidefinite, then $A \\odot B$ is also positive semidefinite.

The lesson treats it in [Two more products: Hadamard and outer](!/linear-algebra/matrix/operations#13).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Kronecker Product`,
    content: `The Kronecker product $A \\otimes B$ replaces each element $a_{ij}$ of $A$ with the block $a_{ij} \\cdot B$. If $A$ is $m \\times n$ and $B$ is $p \\times q$, the result is $mp \\times nq$.

The Kronecker product is bilinear and associative but not commutative. Key properties include $(A \\otimes B)(C \\otimes D) = (AC) \\otimes (BD)$ when dimensions allow, and $\\det(A \\otimes B) = \\det(A)^q \\cdot \\det(B)^m$ for square matrices. It is used in quantum computing (tensor product of state spaces), control theory, and signal processing.

The Kronecker product is the block-matrix cousin of the outer product in [Two more products: Hadamard and outer](!/linear-algebra/matrix/operations#13); the products it is built from are in [Matrix multiplication: definition](!/linear-algebra/matrix/operations#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Commutator`,
    content: `The commutator of two square matrices is defined as:

$$[A, B] = AB - BA$$

When $[A, B] = 0$ (the zero matrix), $A$ and $B$ commute, meaning their multiplication order does not matter. The commutator is antisymmetric: $[A, B] = -[B, A]$ and satisfies the Jacobi identity: $[A, [B, C]] + [B, [C, A]] + [C, [A, B]] = 0$. The commutator is fundamental in **Lie algebra**, quantum mechanics (where it relates to the uncertainty principle), and differential geometry.

Why $AB$ and $BA$ differ is in [Matrix multiplication: properties](!/linear-algebra/matrix/operations#6); the trace of a commutator is always zero, see [Trace of commutators](!/linear-algebra/matrix/trace#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Anti-commutator`,
    content: `The anti-commutator of two square matrices is defined as:

$$\\{A, B\\} = AB + BA$$

It is the symmetric counterpart of the **commutator**. The anti-commutator is always symmetric: $\\{A, B\\} = \\{B, A\\}$. In quantum mechanics, anti-commutation relations define **fermionic operators** (particles obeying the Pauli exclusion principle), while commutation relations define bosonic operators. The anti-commutator also appears in Clifford algebras and Jordan algebras.

See [Matrix multiplication: properties](!/linear-algebra/matrix/operations#6) and, for the trace of the two orders, [Trace of commutators](!/linear-algebra/matrix/trace#8).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Scalar Multiplication`,
    content: `Scalar multiplication multiplies every element of a matrix by a single number $c$:

$$(cA)_{ij} = c \\cdot a_{ij}$$

This scales the entire matrix uniformly. For the determinant, $\\det(cA) = c^n \\det(A)$ where $n$ is the matrix size. Scalar multiplication is commutative ($cA = Ac$), associative ($c(dA) = (cd)A$), and distributes over matrix addition ($c(A + B) = cA + cB$). Geometrically, it scales the **linear transformation** represented by the matrix.

See [Scalar multiplication](!/linear-algebra/matrix/operations#3) and [Linear combinations of matrices](!/linear-algebra/matrix/operations#4).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Scalar Addition and Subtraction`,
    content: `Scalar addition adds a constant $c$ to every element of a matrix:

$$(A + c)_{ij} = a_{ij} + c$$

Scalar subtraction works the same way with a minus sign. Note that this is different from adding $cI$ (scalar times identity), which only affects diagonal elements. Scalar addition shifts all entries by the same amount and is used in data normalization, bias adjustments, and preprocessing steps in numerical computation.

The two operations have their own sections: [Scalar Addition](!#scalar-addition) and [Scalar Subtraction](!#scalar-subtraction). The ordinary arithmetic they sit next to is summarised in [Matrix arithmetic at a glance](!/linear-algebra/matrix#5).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Matrix Power`,
    content: `Matrix power raises a square matrix to a non-negative integer exponent through repeated multiplication:

$$A^n = \\underbrace{A \\cdot A \\cdots A}_{n \\text{ times}}$$

By convention, $A^0 = I$ (the identity matrix). The calculator uses exponentiation by squaring for efficiency, reducing the cost from $O(n)$ multiplications to $O(\\log n)$. Matrix powers appear in Markov chains (transition probabilities over $n$ steps), solving **linear recurrences**, graph theory (counting paths of length $n$), and computing the **matrix exponential**.

See [Matrix powers](!/linear-algebra/matrix/operations#9) and, for the identity $A^0 = I$, [The identity matrix](!/linear-algebra/matrix/types#2).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Related Tools and Concepts`,
    content: `This matrix calculator covers single-matrix analysis, two-matrix operations, and scalar operations. For solving systems of linear equations (Gaussian elimination, Gauss-Jordan, Cramer's Rule, and inverse method), use the dedicated **Linear Systems Calculator**.

Related linear algebra topics include **eigenvalues and eigenvectors**, **singular value decomposition (SVD)**, **QR decomposition**, **vector operations**, and **matrix norms**. These tools and concepts build on the foundational operations available in this calculator.

The lesson hub gathers these views in [Four views of a matrix](!/linear-algebra/matrix#11) and [Matrices and systems of equations](!/linear-algebra/matrix#9).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj18: {
    title: `Scalar Addition`,
    content: `Scalar addition adds the same number $c$ to every entry: $(A + c)_{ij} = a_{ij} + c$. For $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $c = 1$ the result is $\\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}$. The operation keeps the shape of $A$ and shifts every entry by the same amount, which is what a spreadsheet does when a constant is added to a whole block of cells.

It is not the same as $A + cI$, which adds $c$ to the diagonal only; the calculator's Scalar Addition changes all four entries, so the determinant and the eigenvalues do not follow a simple rule. The common mistake is to mix the two up when a textbook writes $A + c$ as shorthand for $A + cI$. The arithmetic it sits next to is in [Matrix arithmetic at a glance](!/linear-algebra/matrix#5) and [Linear combinations of matrices](!/linear-algebra/matrix/operations#4).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj19: {
    title: `Scalar Subtraction`,
    content: `Scalar subtraction takes the same number $c$ from every entry: $(A - c)_{ij} = a_{ij} - c$. For $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $c = 1$ the result is $\\begin{pmatrix} 0 & 1 \\\\ 2 & 3 \\end{pmatrix}$; it is scalar addition with $-c$, so the two operations undo each other.

As with scalar addition, this is an entry-wise shift and not $A - cI$, which only touches the diagonal; the latter is the matrix whose determinant gives the characteristic polynomial. The common mistake is to expect the trace to drop by $c$ when it drops by $nc$ for an $n \\times n$ matrix, since every diagonal entry moves. See [Matrix arithmetic at a glance](!/linear-algebra/matrix#5) and [Scalar multiplication](!/linear-algebra/matrix/operations#3) for the operations that do follow the usual rules.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj20: {
    title: `Single-Matrix Operations`,
    content: `The **Single Matrix** category works on one matrix $A$ and offers six operations: [Matrix Transpose](!#matrix-transpose), [Matrix Determinant](!#matrix-determinant), [Matrix Inverse](!#matrix-inverse), [Matrix Trace](!#matrix-trace), [Matrix Rank](!#matrix-rank) and [LU Decomposition](!#lu-decomposition). Transpose and rank accept any shape; determinant, inverse, trace and LU decomposition need a square matrix and are greyed out while the size boxes differ.

All six read the same cells, so one matrix can be examined from every side: for $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ the transpose is $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$, the determinant $-2$, the inverse $\\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}$, the trace $5$ and the rank $2$; the determinant being non-zero is what makes the inverse exist and the rank full. The lesson hub summarises these quantities in [The inverse of a matrix](!/linear-algebra/matrix#7) and [Rank and trace](!/linear-algebra/matrix#8).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj21: {
    title: `Two-Matrix Operations`,
    content: `The **Two Matrices** category combines $A$ and $B$ with seven operations: [Matrix Addition](!#matrix-addition), [Matrix Subtraction](!#matrix-subtraction), [Matrix Multiplication](!#matrix-multiplication), the [Element-wise (Hadamard) Product](!#element-wise-hadamard-product), the [Kronecker Product](!#kronecker-product), the [Commutator](!#commutator) and the [Anti-commutator](!#anti-commutator). Addition, subtraction and the Hadamard product need equal shapes; multiplication needs the columns of $A$ to match the rows of $B$; the commutators need square matrices of one size. The calculator checks these before computing and names the problem in a red box.

With $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$: $A + B = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$, $AB = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$ while $BA = \\begin{pmatrix} 23 & 34 \\\\ 31 & 46 \\end{pmatrix}$, so $[A, B] = \\begin{pmatrix} -4 & -12 \\\\ 12 & 4 \\end{pmatrix}$. The products are defined in [Matrix multiplication: definition](!/linear-algebra/matrix/operations#5) and compared in [Matrix arithmetic at a glance](!/linear-algebra/matrix#5).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj22: {
    title: `Scalar Operations`,
    content: `The **Scalar Operations** category combines one matrix with one number $c$, typed in the **Scalar value** box: [Scalar Multiplication](!#scalar-multiplication), [Scalar Addition](!#scalar-addition), [Scalar Subtraction](!#scalar-subtraction) and [Matrix Power](!#matrix-power), where the scalar is the exponent. Multiplication, addition and subtraction work on any shape; the power needs a square matrix and a non-negative whole exponent.

For $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $c = 2$: $2A = \\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$, $A + 2 = \\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$ and $A^2 = \\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}$. Only scalar multiplication is one of the standard vector-space operations; the other three are conveniences. See [Scalar multiplication](!/linear-algebra/matrix/operations#3) and [Matrix powers](!/linear-algebra/matrix/operations#9).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj23: {
    title: `Choosing a Category and an Operation`,
    content: `The calculator opens on **Select Operation Type** with three cards: **Single Matrix** (determinant, transpose, inverse, trace, rank), **Two Matrices** (addition, subtraction, multiplication and more) and **Scalar Operations** (scalar multiplication, addition, power). Clicking a card moves to the input screen, which has three columns: the **Category** list on the left with the operations of the chosen category under it, the **Matrix Input** card in the middle and the explanation panel on the right. One matrix is created for a single-matrix or scalar category, two for the two-matrix category, all at the current size.

Click an operation in the left column to select it; a dot marks the choice, the panel heading takes the operation's name, and any earlier result is cleared. Click another category in the same column to switch; the operation list changes and the matrices are rebuilt, so values typed for the old category are lost. Operations that need a square matrix are greyed out while the size boxes differ. **Reset All** at the top right returns to the first screen with the size back at $3 \\times 3$. What each category contains is explained in [Single-Matrix Operations](!#single-matrix-operations), [Two-Matrix Operations](!#two-matrix-operations) and [Scalar Operations](!#scalar-operations).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj24: {
    title: `Setting the Matrix Size`,
    content: `The **Rows** and **Cols** boxes above the matrices set the size of every matrix at once, from $1$ to $10$ each; the heading **Matrix Input (3×3)** and the note under the boxes repeat the size. Changing a box rebuilds the grids immediately: cells that still fit keep their values and new cells arrive empty. A value outside $1$ to $10$ is refused with "Rows must be between 1 and 10" or "Columns must be between 1 and 10" and the grids are left as they were.

When the two boxes differ an orange note, "Some operations require square matrices", appears, and the determinant, inverse, trace and LU decomposition buttons grey out; multiplication of two matrices needs the columns of $A$ to equal the rows of $B$, which with one shared size means a square matrix as well. For two-matrix operations both matrices always share the size set here, so a product of a $2 \\times 3$ by a $3 \\times 2$ matrix cannot be entered. Why the shape matters is explained in [Matrix Multiplication](!#matrix-multiplication) and [Matrix Determinant](!#matrix-determinant).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj25: {
    title: `Entering the Matrices`,
    content: `Each matrix is a card headed **Matrix A** or **Matrix B** with a grid of number boxes; type one number per cell, decimals and negatives included, and use Tab to move on. Above the grid, **Random** fills the matrix with whole numbers from $-10$ to $10$ and **Clear** empties it. Below the grid the **Value** box feeds two buttons: **Fill All** writes the value into every cell (with an empty box, $0$) and **Diagonal** writes it on the main diagonal with zeros elsewhere (with an empty box, $1$, which gives the identity matrix). Each matrix has its own buttons, so $A$ and $B$ are filled separately.

An empty cell is reported at Execute time as "Matrix A has empty cells", and a cell that is not a number as "Matrix A contains invalid numbers". For scalar operations the **Scalar value** box sits under the matrix; it must hold a number or Execute answers "Please enter a valid scalar value". For a two-matrix operation with more than five columns, the two grids fold into accordions that open with a click on their header. The entries are indexed as in [Matrix Addition](!#matrix-addition), row first and column second.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj26: {
    title: `Calculating and Reading the Result`,
    content: `Click **Execute Operation** under the matrices; the button is grey until an operation is selected. The calculator first checks the input, listing every problem in a red box: empty or invalid cells, a non-square matrix for an operation that needs one, mismatched sizes ("Matrices must have the same dimensions for this operation", "For multiplication, columns of A must equal rows of B") or a missing scalar. When the input passes, the button shows "Calculating..." for a moment and the **Result** box fills.

The shape of the result follows the operation: a single number with its name for the determinant, trace or rank, for example "Determinant" and $-2$ for $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$; a matrix with its size for the transpose, inverse, sums and products, such as $\\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}$ for the inverse; and three labelled matrices $P$, $L$ and $U$ for the LU decomposition. A singular matrix makes the inverse fail with a message in the result box. Decimals are shown rounded. **Reset All** clears everything and returns to the first screen. The operations behind the results start with [Matrix Transpose](!#matrix-transpose).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj27: {
    title: `The Explanation Panel, Steps and History`,
    content: `The panel on the right of the input card carries the heading of the selected operation and a short text on what it computes, with a link to the section of this page that explains it; before an operation is chosen it describes the category. After a successful Execute, **Calculation Steps** appears under the text with the arithmetic for your numbers, for example the row-by-column products of a multiplication or the cofactors of a determinant, and a **History** accordion lists every computation of this visit with its time, inputs and result; **Clear history** empties it.

The panel changes as soon as you click another operation, and the steps disappear until the next Execute, so the text always matches the operation that is selected rather than the last one computed. Reset All clears the steps but not the history. The operations the panel describes are explained in the theory sections, grouped in [Single-Matrix Operations](!#single-matrix-operations), [Two-Matrix Operations](!#two-matrix-operations) and [Scalar Operations](!#scalar-operations).`,
    before: ``,
    after: ``,
    link: '',
  },

};

const faqQuestions = {
  obj1: {
    question: "What matrix operations does this calculator support?",
    answer: "This calculator supports 17 matrix operations across three categories: single matrix operations (transpose, determinant, inverse, trace, rank, LU decomposition), two-matrix operations (addition, subtraction, multiplication, Hadamard product, Kronecker product, commutator, anti-commutator), and scalar operations (scalar multiplication, addition, subtraction, matrix power)."
  },
  obj2: {
    question: "How do you calculate the determinant of a matrix?",
    answer: "For a 2x2 matrix, the determinant equals ad - bc where a, b, c, d are the entries. For larger matrices, the calculator uses Gaussian elimination with partial pivoting to reduce the matrix to upper triangular form, then multiplies the diagonal entries and adjusts for row swaps."
  },
  obj3: {
    question: "What is the difference between matrix multiplication and element-wise multiplication?",
    answer: "Standard matrix multiplication computes dot products of rows and columns, requiring the column count of the first matrix to match the row count of the second. Element-wise (Hadamard) multiplication simply multiplies corresponding entries and requires both matrices to have identical dimensions."
  },
  obj4: {
    question: "When is a matrix invertible?",
    answer: "A matrix is invertible (has an inverse) if and only if it is square and its determinant is nonzero. Equivalently, the matrix must have full rank, meaning all its rows and columns are linearly independent. The calculator finds the inverse using Gauss-Jordan elimination on the augmented matrix [A|I]."
  },
  obj5: {
    question: "What is LU decomposition used for?",
    answer: "LU decomposition factors a matrix into lower and upper triangular matrices (PA = LU). It is used to efficiently solve multiple linear systems sharing the same coefficient matrix, compute determinants, and find matrix inverses. Once factored, each new system requires only forward and back substitution instead of full elimination."
  }
};


const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Matrix Operations Calculator",
    "description": "Interactive matrix calculator with 17 operations including determinant, inverse, transpose, multiplication, LU decomposition, and more.",
    "url": "https://www.learnmathclass.com/linear-algebra/calculators/matrix",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Single matrix operations: transpose, determinant, inverse, trace, rank, LU decomposition",
      "Two-matrix operations: addition, subtraction, multiplication, Hadamard and Kronecker products",
      "Commutator and anti-commutator calculations",
      "Scalar multiplication, addition, subtraction, and matrix power",
      "Step-by-step calculation breakdowns for every operation",
      "Supports matrices up to 10x10 with random fill and diagonal presets",
      "Computation history tracking with operation replay"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College",
    "keywords": keyWords.join(", ")
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
        "name": "Calculators",
        "item": "https://www.learnmathclass.com/linear-algebra/calculators"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Matrix Operations Calculator",
        "item": "https://www.learnmathclass.com/linear-algebra/calculators/matrix"
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
};



const detailInstructions = [
  `Pick a card on the first screen, **Single Matrix**, **Two Matrices** or **Scalar Operations**, then an operation in the **Category** column on the left. [Learn more about choosing an operation](!#choosing-a-category-and-an-operation)`,
  `Set **Rows** and **Cols** (1 to 10); every matrix takes the size, and square-only operations grey out while the two differ. [Learn more about the matrix size](!#setting-the-matrix-size)`,
  `Type the cells of **Matrix A** (and **Matrix B**), or use **Random**, **Clear**, **Fill All** and **Diagonal** with the **Value** box; for scalar operations type the **Scalar value**. [Learn more about entering matrices](!#entering-the-matrices)`,
  `Click **Execute Operation**; a red box lists any problem, otherwise the **Result** box shows a number, a matrix or the three matrices of a decomposition. **Reset All** returns to the first screen. [Learn more about the result](!#calculating-and-reading-the-result)`,
  `Read the panel on the right: the operation's description, the **Calculation Steps** after an Execute, and the **History** of this visit. [Learn more about the panel](!#the-explanation-panel-steps-and-history)`,
];
const demos = {
  'choosing-a-category-and-an-operation': {
    title: 'A category, an operation, another category',
    scale: 0.4,
    minHeight: 360,
    script: [
      { say: 'CLICK Single Matrix\nThe input screen: the six single-matrix operations on the left, one 3×3 matrix in the middle.', at: 'tr' },
      { click: { button: 'Single Matrix' } },
      { wait: 2800 },
      { say: 'CLICK Determinant\nA dot marks it; the panel heading reads Determinant.', at: 'tr' },
      { click: { button: 'Determinant', exact: true } },
      { wait: 2600 },
      { say: 'CLICK Two Matrices in the Category column\nSeven operations; Matrix A and Matrix B, both empty.', at: 'tr' },
      { click: { button: 'Two Matrices' } },
      { wait: 2800 },
    ],
  },
  'setting-the-matrix-size': {
    title: '2×2, then 2×3, then Reset All',
    scale: 0.4,
    minHeight: 360,
    script: [
      { say: 'CLICK Single Matrix, TYPE 2 and 2\nMatrix Input (2×2): four cells.', at: 'tr' },
      { click: { button: 'Single Matrix' } },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '2' },
      { wait: 2800 },
      { say: 'TYPE 3 as Cols\nA 2×3 matrix; the note says some operations require square matrices, and Determinant greys out.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '3' },
      { wait: 2800 },
      { say: 'CLICK Reset All\nBack to the first screen; the size returns to 3×3.', at: 'tr' },
      { click: { button: 'Reset All', exact: true } },
      { wait: 2400 },
    ],
  },
  'entering-the-matrices': {
    title: 'Typing A and B, then Random, Fill All and Diagonal',
    scale: 0.4,
    minHeight: 360,
    script: [
      { say: 'CLICK Two Matrices, TYPE 2 and 2, then A = 1, 2, 3, 4 and B = 5, 6, 7, 8\nOne number per cell, row by row.', at: 'tr' },
      { click: { button: 'Two Matrices' } },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '4' },
      { set: { css: 'input[type="number"]', nth: 8 }, value: '5' },
      { set: { css: 'input[type="number"]', nth: 9 }, value: '6' },
      { set: { css: 'input[type="number"]', nth: 10 }, value: '7' },
      { set: { css: 'input[type="number"]', nth: 11 }, value: '8' },
      { wait: 3200 },
      { say: 'CLICK Random above Matrix A\nWhole numbers from −10 to 10 replace the four cells of A.', at: 'tr' },
      { click: { button: 'Random', exact: true } },
      { wait: 2600 },
      { say: 'TYPE 7 as the Value of A, CLICK Fill All\nEvery cell of A reads 7.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '7' },
      { click: { button: 'Fill All', exact: true } },
      { wait: 2600 },
      { say: 'CLICK Diagonal\n7 on the diagonal of A, 0 elsewhere.', at: 'tr' },
      { click: { button: 'Diagonal', exact: true } },
      { wait: 2600 },
    ],
  },
  'calculating-and-reading-the-result': {
    title: 'A determinant, an inverse, an error',
    scale: 0.4,
    minHeight: 360,
    script: [
      { say: 'CLICK Single Matrix, TYPE 2 and 2 and the cells 1, 2, 3, 4, CLICK Determinant, CLICK Execute Operation\nThe Result box: Determinant −2.', at: 'tr' },
      { click: { button: 'Single Matrix' } },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '4' },
      { click: { button: 'Determinant', exact: true } },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3200 },
      { say: 'CLICK Inverse, CLICK Execute Operation\nA 2×2 matrix: −2, 1 over 1.5, −0.5.', at: 'tr' },
      { click: { button: 'Inverse', exact: true } },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3200 },
      { say: 'CLICK Clear, CLICK Execute Operation\nThe red box: Matrix A has empty cells.', at: 'tr' },
      { click: { button: 'Clear', exact: true } },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 2800 },
    ],
  },
  'the-explanation-panel-steps-and-history': {
    title: 'The panel text, the steps, the history',
    scale: 0.4,
    minHeight: 360,
    script: [
      { say: 'CLICK Two Matrices, TYPE 2 and 2 and both matrices, CLICK Multiplication\nThe panel heading reads Multiplication with its description.', at: 'tr' },
      { click: { button: 'Two Matrices' } },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '4' },
      { set: { css: 'input[type="number"]', nth: 8 }, value: '5' },
      { set: { css: 'input[type="number"]', nth: 9 }, value: '6' },
      { set: { css: 'input[type="number"]', nth: 10 }, value: '7' },
      { set: { css: 'input[type="number"]', nth: 11 }, value: '8' },
      { click: { button: 'Multiplication', exact: true } },
      { wait: 3200 },
      { say: 'CLICK Execute Operation\nAB = 19, 22 over 43, 50; Calculation Steps appear under the text and History (1) below.', at: 'tr' },
      { click: { button: 'Execute Operation', exact: true } },
      { wait: 3200 },
      { say: 'CLICK History (1)\nThe entry opens with its time, inputs and result.', at: 'tr' },
      { click: { button: 'History' } },
      { wait: 2600 },
    ],
  },
};

  return {
  props: {
    sectionsContent,
   
    matrixExplanations,
    detailInstructions,
    demos,
    faqQuestions,
    schemas,
    seoData: {
      title: "Matrix Calculator - Interactive Operations | Learn Math Class",
      description: "Free matrix calculator with 17 operations: determinant, inverse, transpose, multiplication, LU decomposition, and more. Step-by-step solutions included.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/calculators/matrix",
      name: "Matrix Operations Calculator"
    },
  }
}
   }
export default function MatrixCalculatorPage({seoData, sectionsContent, introContent, matrixExplanations, detailInstructions = [], demos = {}, faqQuestions, schemas}) {
    
 const demoPlayer = (slug) => (
  <ToolDemoPlayer
    key={`demo-${slug}`}
    script={demos[slug].script}
    title={demos[slug].title}
    label={`Demo: ${demos[slug].title}`}
    scale={demos[slug].scale || 0.4}
    minHeight={demos[slug].minHeight || undefined}
    renderText={processContent}
  >
    <MatrixCalculatorAll explanations={matrixExplanations} />
  </ToolDemoPlayer>
 )
 const genericSections=[
  { id:'choosing-a-category-and-an-operation', title:sectionsContent.obj23.title, link:sectionsContent.obj23.link, content:[demoPlayer('choosing-a-category-and-an-operation'), sectionsContent.obj23.content] },
  { id:'setting-the-matrix-size', title:sectionsContent.obj24.title, link:sectionsContent.obj24.link, content:[demoPlayer('setting-the-matrix-size'), sectionsContent.obj24.content] },
  { id:'entering-the-matrices', title:sectionsContent.obj25.title, link:sectionsContent.obj25.link, content:[demoPlayer('entering-the-matrices'), sectionsContent.obj25.content] },
  { id:'calculating-and-reading-the-result', title:sectionsContent.obj26.title, link:sectionsContent.obj26.link, content:[demoPlayer('calculating-and-reading-the-result'), sectionsContent.obj26.content] },
  { id:'the-explanation-panel-steps-and-history', title:sectionsContent.obj27.title, link:sectionsContent.obj27.link, content:[demoPlayer('the-explanation-panel-steps-and-history'), sectionsContent.obj27.content] },
  { id:'single-matrix-operations', title:sectionsContent.obj20.title, link:sectionsContent.obj20.link, content:[sectionsContent.obj20.content] },
  { id:'matrix-transpose', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
  { id:'matrix-determinant', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
  { id:'matrix-inverse', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
  { id:'matrix-trace', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
  { id:'matrix-rank', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
  { id:'lu-decomposition', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
  { id:'two-matrix-operations', title:sectionsContent.obj21.title, link:sectionsContent.obj21.link, content:[sectionsContent.obj21.content] },
  { id:'matrix-addition', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
  { id:'matrix-subtraction', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
  { id:'matrix-multiplication', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
  { id:'element-wise-hadamard-product', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
  { id:'kronecker-product', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
  { id:'commutator', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
  { id:'anti-commutator', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
  { id:'scalar-operations', title:sectionsContent.obj22.title, link:sectionsContent.obj22.link, content:[sectionsContent.obj22.content] },
  { id:'scalar-multiplication', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
  { id:'scalar-addition-and-subtraction', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
  { id:'scalar-addition', title:sectionsContent.obj18.title, link:sectionsContent.obj18.link, content:[sectionsContent.obj18.content] },
  { id:'scalar-subtraction', title:sectionsContent.obj19.title, link:sectionsContent.obj19.link, content:[sectionsContent.obj19.content] },
  { id:'matrix-power', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content] },
  { id:'related-tools-and-concepts', title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content] },
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
      __html: JSON.stringify(schemas.webApplication)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Matrix Calculator</h1>
   <div style={{marginBottom:'20px'}}>
     <ExplanationDetails instructions={detailInstructions} title='How to use Matrix Calculator' />
   </div>
   <br/>
   <div style={{transform:'scale(1)',marginLeft:'-250px'}}>
     <SiblingsNav topOffset="200px" title='Similar Calculators' 
        bg="#f0f4ff"
      color="#1f2937"
      activeColor="#4285f4"
      activeBg="#f0f7ff">
  <MatrixCalculatorAll explanations={matrixExplanations}/>
   </SiblingsNav>
   </div>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
   <br/>
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections
    // .slice(1)
    }/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
