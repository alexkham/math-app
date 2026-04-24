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

const descriptions = {
  single: {
    _default:
      'Single matrix operations work on one matrix at a time. Choose an operation to see a detailed explanation.',
    Transpose:
      'The transpose flips a matrix over its diagonal, turning rows into columns and vice versa: (A\u1D40)\u1D62\u2C7C = A\u2C7C\u1D62. If A is m\u00D7n, then A\u1D40 is n\u00D7m. Transposing twice returns the original matrix.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#1) \u2193@',
    Determinant:
      'The determinant is a scalar value that encodes properties of a square matrix. It is zero if and only if the matrix is singular (non-invertible). Geometrically, |det(A)| gives the scale factor by which A transforms volumes.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#2) \u2193@',
    Inverse:
      'The inverse A\u207B\u00B9 satisfies AA\u207B\u00B9 = A\u207B\u00B9A = I. It exists only for square matrices with non-zero determinant. Computing the inverse uses Gauss-Jordan elimination on the augmented matrix [A | I].\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#3) \u2193@',
    Trace:
      'The trace is the sum of the diagonal elements: tr(A) = \u03A3 a\u1D62\u1D62. It equals the sum of the eigenvalues and is invariant under similarity transformations. Defined only for square matrices.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#4) \u2193@',
    Rank:
      'The rank is the number of linearly independent rows (equivalently, columns). Found by row reducing to echelon form and counting pivot positions. Rank tells you the dimension of the column space.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#5) \u2193@',
    'LU Decomposition':
      'LU decomposition factors A into PA = LU where P is a permutation matrix, L is lower triangular with 1s on the diagonal, and U is upper triangular. Used for efficient solving of multiple systems with the same coefficient matrix.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#6) \u2193@',
  },
  two: {
    _default:
      'Two-matrix operations take a pair of matrices and produce a new matrix or scalar. Choose an operation to learn more.',
    Addition:
      'Matrix addition sums corresponding elements: (A+B)\u1D62\u2C7C = a\u1D62\u2C7C + b\u1D62\u2C7C. Both matrices must have identical dimensions. Addition is commutative (A+B = B+A) and associative.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#7) \u2193@',
    Subtraction:
      'Matrix subtraction finds the difference of corresponding elements: (A\u2212B)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 b\u1D62\u2C7C. Both matrices must have identical dimensions.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#8) \u2193@',
    Multiplication:
      'Matrix multiplication AB requires columns of A to equal rows of B. The result has dimensions m\u00D7p for m\u00D7n and n\u00D7p matrices. Element (i,j) of AB is the dot product of row i of A with column j of B. Not commutative in general.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#9) \u2193@',
    'Element-wise Multiplication':
      'The Hadamard product (A\u2299B) multiplies corresponding elements: (A\u2299B)\u1D62\u2C7C = a\u1D62\u2C7C \u00B7 b\u1D62\u2C7C. Both matrices must have identical dimensions. Unlike standard multiplication, it is commutative.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#10) \u2193@',
    'Kronecker Product':
      'The Kronecker product A\u2297B creates a block matrix by replacing each element a\u1D62\u2C7C of A with the block a\u1D62\u2C7C\u00B7B. If A is m\u00D7n and B is p\u00D7q, the result is mp\u00D7nq.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#11) \u2193@',
    Commutator:
      'The commutator [A,B] = AB \u2212 BA measures how much the order of multiplication matters. It is zero when A and B commute. Important in Lie algebra and quantum mechanics.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#12) \u2193@',
    'Anti-commutator':
      'The anti-commutator {A,B} = AB + BA is the symmetric counterpart of the commutator. Used extensively in quantum mechanics, particularly for fermionic operators.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#13) \u2193@',
  },
  scalar: {
    _default:
      'Scalar operations combine a matrix with a single number. Choose an operation to see details.',
    'Scalar Multiplication':
      'Scalar multiplication multiplies every element of the matrix by the scalar: (cA)\u1D62\u2C7C = c \u00B7 a\u1D62\u2C7C. It scales the entire matrix uniformly. The determinant of cA equals c\u207F \u00B7 det(A) for an n\u00D7n matrix.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#14) \u2193@',
    'Scalar Addition':
      'Scalar addition adds the scalar to every element of the matrix: (A + c)\u1D62\u2C7C = a\u1D62\u2C7C + c. This shifts every entry by the same amount.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#15) \u2193@',
    'Scalar Subtraction':
      'Scalar subtraction subtracts the scalar from every element: (A \u2212 c)\u1D62\u2C7C = a\u1D62\u2C7C \u2212 c.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#15) \u2193@',
    'Matrix Power (Scalar)':
      'Matrix power raises a square matrix to a non-negative integer exponent by repeated multiplication: A\u207F = A\u00B7A\u00B7\u2026\u00B7A (n times). A\u2070 = I (identity). Computed efficiently using exponentiation by squaring.\n\n@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn more](!/linear-algebra/calculators/matrix#16) \u2193@',
  },
  system: {
    _default:
      'System operations are available in the dedicated Linear Systems Calculator for a more complete experience.',
  },
};


const sectionsContent = {

  obj1: {
    title: `Matrix Transpose`,
    content: `The transpose of a matrix $A$ swaps its rows and columns. If $A$ is an $m \\times n$ matrix, then $A^T$ is $n \\times m$, with each entry satisfying $(A^T)_{ij} = A_{ji}$.

$$A^T_{ij} = A_{ji}$$

Key properties include $(A^T)^T = A$, $(AB)^T = B^T A^T$, and $(A + B)^T = A^T + B^T$. A matrix equal to its own transpose is called **symmetric**. The transpose is fundamental in computing **dot products**, defining **orthogonal matrices**, and constructing the **normal equation** for least squares problems.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Matrix Determinant`,
    content: `The determinant is a scalar value computed from a **square matrix** that captures essential properties of the transformation it represents. A matrix is **invertible** if and only if its determinant is nonzero.

For a $2 \\times 2$ matrix:

$$\\det(A) = a_{11}a_{22} - a_{12}a_{21}$$

For larger matrices, the determinant is computed via cofactor expansion or row reduction. Geometrically, $|\\det(A)|$ measures the factor by which the matrix scales areas or volumes. Key properties: $\\det(AB) = \\det(A)\\det(B)$, $\\det(A^T) = \\det(A)$, and $\\det(cA) = c^n \\det(A)$ for an $n \\times n$ matrix.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Matrix Inverse`,
    content: `The inverse of a square matrix $A$, denoted $A^{-1}$, satisfies $AA^{-1} = A^{-1}A = I$. A matrix has an inverse only when its **determinant** is nonzero.

$$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$$

The calculator finds the inverse using **Gauss-Jordan elimination** on the augmented matrix $[A | I]$. Row operations transform the left side into $I$, and the right side becomes $A^{-1}$. The inverse is used to solve **linear systems** ($x = A^{-1}b$), compute **matrix equations**, and analyze transformations.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Matrix Trace`,
    content: `The trace of a square matrix is the sum of its diagonal elements:

$$\\text{tr}(A) = \\sum_{i=1}^{n} a_{ii}$$

The trace has several important properties. It is linear: $\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)$ and $\\text{tr}(cA) = c \\cdot \\text{tr}(A)$. It is cyclic: $\\text{tr}(ABC) = \\text{tr}(BCA) = \\text{tr}(CAB)$. The trace equals the sum of the **eigenvalues** of the matrix, making it useful in spectral analysis and matrix diagnostics.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Matrix Rank`,
    content: `The rank of a matrix is the number of **linearly independent** rows or columns. It equals the dimension of the **column space** (or row space) and is found by reducing the matrix to row echelon form and counting pivot positions.

$$\\text{rank}(A) \\leq \\min(m, n)$$

A matrix with rank equal to its smaller dimension has full rank. Rank determines whether a **linear system** $Ax = b$ has a unique solution, infinitely many solutions, or no solution. The rank-nullity theorem states $\\text{rank}(A) + \\text{nullity}(A) = n$ where $n$ is the number of columns.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `LU Decomposition`,
    content: `LU decomposition factors a square matrix into a product of a lower triangular matrix $L$ and an upper triangular matrix $U$, with a permutation matrix $P$ tracking row swaps:

$$PA = LU$$

$L$ has ones on the diagonal with elimination multipliers below. $U$ is the result of **Gaussian elimination**. This factorization is efficient for solving multiple systems with the same coefficient matrix but different right-hand sides, since forward and back substitution are much cheaper than full elimination. LU decomposition is also used to compute **determinants** efficiently: $\\det(A) = \\det(L) \\cdot \\det(U) \\cdot \\det(P)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Matrix Addition`,
    content: `Matrix addition sums corresponding elements of two matrices with identical dimensions. If $A$ and $B$ are both $m \\times n$:

$$(A + B)_{ij} = a_{ij} + b_{ij}$$

Addition is commutative ($A + B = B + A$) and associative ($(A + B) + C = A + (B + C)$). The zero matrix acts as the additive identity. Subtraction works identically, replacing each sum with a difference: $(A - B)_{ij} = a_{ij} - b_{ij}$. Both operations preserve matrix dimensions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Matrix Subtraction`,
    content: `Matrix subtraction computes the element-wise difference between two matrices of the same dimensions:

$$(A - B)_{ij} = a_{ij} - b_{ij}$$

Subtraction is equivalent to adding the negation: $A - B = A + (-B)$. Unlike addition, subtraction is not commutative: $A - B \\neq B - A$ in general. The result has the same dimensions as both input matrices. Subtraction is used in computing **residuals**, error matrices, and the **commutator** operation $[A, B] = AB - BA$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Matrix Multiplication`,
    content: `Matrix multiplication combines an $m \\times n$ matrix $A$ with an $n \\times p$ matrix $B$ to produce an $m \\times p$ result. The number of columns in $A$ must equal the number of rows in $B$.

$$(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$$

Each entry is the **dot product** of a row from $A$ with a column from $B$. Multiplication is associative and distributive over addition, but not commutative: $AB \\neq BA$ in general. Matrix multiplication models composition of **linear transformations** and is the core operation in systems of equations, computer graphics, and machine learning.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Element-wise (Hadamard) Product`,
    content: `The Hadamard product, denoted $A \\odot B$, multiplies corresponding elements of two matrices with the same dimensions:

$$(A \\odot B)_{ij} = a_{ij} \\cdot b_{ij}$$

Unlike standard **matrix multiplication**, the Hadamard product is commutative ($A \\odot B = B \\odot A$) and preserves dimensions. It appears in signal processing, neural network computations (gradient masking, attention mechanisms), and statistics. The Schur product theorem states that if $A$ and $B$ are both positive semidefinite, then $A \\odot B$ is also positive semidefinite.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj11: {
    title: `Kronecker Product`,
    content: `The Kronecker product $A \\otimes B$ replaces each element $a_{ij}$ of $A$ with the block $a_{ij} \\cdot B$. If $A$ is $m \\times n$ and $B$ is $p \\times q$, the result is $mp \\times nq$.

The Kronecker product is bilinear and associative but not commutative. Key properties include $(A \\otimes B)(C \\otimes D) = (AC) \\otimes (BD)$ when dimensions allow, and $\\det(A \\otimes B) = \\det(A)^q \\cdot \\det(B)^m$ for square matrices. It is used in quantum computing (tensor product of state spaces), control theory, and signal processing.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj12: {
    title: `Commutator`,
    content: `The commutator of two square matrices is defined as:

$$[A, B] = AB - BA$$

When $[A, B] = 0$ (the zero matrix), $A$ and $B$ commute, meaning their multiplication order does not matter. The commutator is antisymmetric: $[A, B] = -[B, A]$ and satisfies the Jacobi identity: $[A, [B, C]] + [B, [C, A]] + [C, [A, B]] = 0$. The commutator is fundamental in **Lie algebra**, quantum mechanics (where it relates to the uncertainty principle), and differential geometry.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Anti-commutator`,
    content: `The anti-commutator of two square matrices is defined as:

$$\\{A, B\\} = AB + BA$$

It is the symmetric counterpart of the **commutator**. The anti-commutator is always symmetric: $\\{A, B\\} = \\{B, A\\}$. In quantum mechanics, anti-commutation relations define **fermionic operators** (particles obeying the Pauli exclusion principle), while commutation relations define bosonic operators. The anti-commutator also appears in Clifford algebras and Jordan algebras.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `Scalar Multiplication`,
    content: `Scalar multiplication multiplies every element of a matrix by a single number $c$:

$$(cA)_{ij} = c \\cdot a_{ij}$$

This scales the entire matrix uniformly. For the determinant, $\\det(cA) = c^n \\det(A)$ where $n$ is the matrix size. Scalar multiplication is commutative ($cA = Ac$), associative ($c(dA) = (cd)A$), and distributes over matrix addition ($c(A + B) = cA + cB$). Geometrically, it scales the **linear transformation** represented by the matrix.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj15: {
    title: `Scalar Addition and Subtraction`,
    content: `Scalar addition adds a constant $c$ to every element of a matrix:

$$(A + c)_{ij} = a_{ij} + c$$

Scalar subtraction works the same way with a minus sign. Note that this is different from adding $cI$ (scalar times identity), which only affects diagonal elements. Scalar addition shifts all entries by the same amount and is used in data normalization, bias adjustments, and preprocessing steps in numerical computation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj16: {
    title: `Matrix Power`,
    content: `Matrix power raises a square matrix to a non-negative integer exponent through repeated multiplication:

$$A^n = \\underbrace{A \\cdot A \\cdots A}_{n \\text{ times}}$$

By convention, $A^0 = I$ (the identity matrix). The calculator uses exponentiation by squaring for efficiency, reducing the cost from $O(n)$ multiplications to $O(\\log n)$. Matrix powers appear in Markov chains (transition probabilities over $n$ steps), solving **linear recurrences**, graph theory (counting paths of length $n$), and computing the **matrix exponential**.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj17: {
    title: `Related Tools and Concepts`,
    content: `This matrix calculator covers single-matrix analysis, two-matrix operations, and scalar operations. For solving systems of linear equations (Gaussian elimination, Gauss-Jordan, Cramer's Rule, and inverse method), use the dedicated **Linear Systems Calculator**.

Related linear algebra topics include **eigenvalues and eigenvectors**, **singular value decomposition (SVD)**, **QR decomposition**, **vector operations**, and **matrix norms**. These tools and concepts build on the foundational operations available in this calculator.`,
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



  return {
  props: {
    sectionsContent,
   
    descriptions,
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
export default function MatrixCalculatorPage({seoData, sectionsContent, introContent, descriptions, faqQuestions, schemas}) {
    
 const genericSections=[
  { id:'1', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
  { id:'2', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
  { id:'3', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
  { id:'4', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
  { id:'5', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
  { id:'6', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
  { id:'7', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
  { id:'8', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
  { id:'9', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[sectionsContent.obj9.content] },
  { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
  { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
  { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
  { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
  { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
  { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
  { id:'16', title:sectionsContent.obj16.title, link:sectionsContent.obj16.link, content:[sectionsContent.obj16.content] },
  { id:'17', title:sectionsContent.obj17.title, link:sectionsContent.obj17.link, content:[sectionsContent.obj17.content] },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Matrix Calculator</h1>
   <br/>
   <div style={{transform:'scale(1)',marginLeft:'-250px'}}>
     <SiblingsNav topOffset="200px" title='Similar Calculators' 
        bg="#f0f4ff"
      color="#1f2937"
      activeColor="#4285f4"
      activeBg="#f0f7ff">
  <MatrixCalculatorAll descriptions={descriptions}/>
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
