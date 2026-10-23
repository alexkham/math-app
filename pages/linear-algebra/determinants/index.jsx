// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "determinant",
//   "matrix determinant",
//   "determinant formula",
//   "2x2 determinant",
//   "3x3 determinant",
//   "cofactor expansion",
//   "singular matrix",
//   "invertible matrix determinant",
//   "determinant row operations",
//   "minors and cofactors",
//   "Sarrus rule",
//   "determinant volume",
//   "Laplace expansion",
//   "det A"
// ]
//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//   const sectionsContent = {
//   obj1: {
//     title: `The Determinant as a Scalar Assignment`,
//     content: `Every square matrix $A$ of size $n \\times n$ has a single real number (or complex number, if the entries are complex) associated with it, written $\\det(A)$ or $|A|$. This number is called the determinant. It is defined only for square matrices — a rectangular matrix has no determinant.

// The notation $|A|$ is widespread but potentially confusing, since the same vertical bars denote absolute value for real numbers and modulus for complex numbers. When there is any risk of ambiguity, $\\det(A)$ is preferred.

// The determinant encodes a remarkable amount of structural information. Its most fundamental role is as an invertibility test: $A$ is [invertible](!/linear-algebra/matrix/inverse) if and only if $\\det(A) \\neq 0$. But it also measures how the linear map $x \\mapsto Ax$ distorts volume, determines whether that map preserves or reverses orientation, and appears in explicit formulas for eigenvalues, matrix inverses, and solutions to linear systems. The next several sections develop the determinant starting from the smallest cases and building toward the general definition.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The 2×2 Formula`,
//     content: `For a $2 \\times 2$ matrix

// $$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$

// the determinant is

// $$\\det(A) = ad - bc$$

// One way to see where this formula comes from is to solve the system $Ax = \\mathbf{v}$ for a general right-hand side. Applying elimination, the solution involves dividing by $ad - bc$ at every step. When $ad - bc = 0$, the system either has no solution or infinitely many, and the matrix cannot be inverted. When $ad - bc \\neq 0$, there is a unique solution for every $\\mathbf{v}$, and the inverse exists.

// The expression $ad - bc$ also carries geometric meaning. The columns of $A$ are the vectors $(a, c)$ and $(b, d)$ in $\\mathbb{R}^2$. The signed area of the parallelogram these two vectors span equals exactly $ad - bc$. A positive value means the columns are arranged counterclockwise; a negative value means clockwise; zero means the columns are parallel and the parallelogram collapses to a line segment.

// ## Worked Examples

// For $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$, the determinant is $3 \\cdot 5 - 1 \\cdot 2 = 13$. The matrix is invertible and its column vectors span a parallelogram of area $13$.

// For $A = \\begin{pmatrix} 4 & 6 \\\\ 2 & 3 \\end{pmatrix}$, the determinant is $4 \\cdot 3 - 6 \\cdot 2 = 0$. The second column is $\\frac{3}{2}$ times the first, so the columns are parallel and the matrix is singular.

// For $A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, the determinant is $0 \\cdot 0 - (-1) \\cdot 1 = 1$. This is a $90°$ rotation matrix — it preserves areas and orientation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The 3×3 Formula`,
//     content: `For a $3 \\times 3$ matrix

// $$A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix}$$

// the determinant is computed by expanding along the first row:

// $$\\det(A) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

// Each first-row entry multiplies the $2 \\times 2$ determinant of the submatrix that remains after deleting that entry's row and column. The signs alternate: $+, -, +$.

// ## The Sarrus Mnemonic

// A shortcut for the $3 \\times 3$ case is the rule of Sarrus. Write the matrix and copy its first two columns to the right:

// $$\\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix} \\begin{matrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{matrix}$$

// Sum the three products along the downward diagonals, then subtract the three products along the upward diagonals. This gives the same result as the first-row expansion. The Sarrus rule works only for $3 \\times 3$ matrices — there is no analogous diagonal trick for $4 \\times 4$ or larger.

// ## Worked Example

// For $A = \\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & -1 & 4 \\\\ 5 & 2 & 3 \\end{pmatrix}$, expanding along the first row:

// $$\\det(A) = 2[(-1)(3) - (4)(2)] - 3[(0)(3) - (4)(5)] + 1[(0)(2) - (-1)(5)]$$

// $$= 2(-3 - 8) - 3(0 - 20) + 1(0 + 5) = 2(-11) - 3(-20) + 5 = -22 + 60 + 5 = 43$$

// The same result follows from the Sarrus rule: downward diagonals give $2(-1)(3) + 3(4)(5) + 1(0)(2) = -6 + 60 + 0 = 54$; upward diagonals give $1(-1)(5) + 2(4)(2) + 3(0)(3) = -5 + 16 + 0 = 11$; the determinant is $54 - 11 = 43$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The General n×n Determinant`,
//     content: `The pattern from the $3 \\times 3$ case extends to any dimension. For an $n \\times n$ matrix, expand along the first row:

// $$\\det(A) = \\sum_{j=1}^{n} (-1)^{1+j} \\, a_{1j} \\, M_{1j}$$

// where $M_{1j}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix obtained by deleting row $1$ and column $j$. This is a recursive definition: each $n \\times n$ determinant reduces to $n$ determinants of size $(n-1) \\times (n-1)$, each of which reduces further, until reaching the base case of $1 \\times 1$ matrices where $\\det(a) = a$.

// A crucial fact is that the expansion need not use the first row. Expanding along any row or any column gives the same result. The signed sub-determinants $(-1)^{i+j} M_{ij}$ are called [cofactors](!/linear-algebra/determinants/cofactors), and the freedom to choose the expansion axis is what makes the formula practical: a row or column with many zeros dramatically reduces the number of terms.

// The recursive nature of this definition means the computational cost grows factorially. An $n \\times n$ determinant via cofactor expansion requires on the order of $n!$ arithmetic operations. For $n = 5$ that is $120$ operations; for $n = 10$ it is over $3.6$ million. This explosion is what motivates the row-reduction approach, which accomplishes the same task in $O(n^3)$ operations by exploiting how [row operations](!/linear-algebra/determinants/properties) affect the determinant.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Singular and Nonsingular Matrices`,
//     content: `The value $\\det(A) = 0$ marks a sharp dividing line. A square matrix with zero determinant is called singular; a square matrix with nonzero determinant is called nonsingular or invertible.

// When $\\det(A) = 0$, the columns of $A$ are [linearly dependent](!/linear-algebra/vector-spaces/linear-independence) — at least one column can be written as a linear combination of the others. The homogeneous system $Ax = \\mathbf{0}$ has nontrivial solutions, the rank of $A$ is strictly less than $n$, and the matrix maps $\\mathbb{R}^n$ onto a lower-dimensional subspace. Geometrically, the transformation collapses at least one dimension, flattening regions of positive volume down to zero volume.

// When $\\det(A) \\neq 0$, everything works. The columns of $A$ form a [basis](!/linear-algebra/vector-spaces/basis) for $\\mathbb{R}^n$. The system $Ax = \\mathbf{b}$ has exactly one solution for every right-hand side $\\mathbf{b}$. The matrix has an inverse $A^{-1}$, and the linear map $x \\mapsto Ax$ is a bijection from $\\mathbb{R}^n$ to itself that stretches or compresses volumes by the factor $|\\det(A)|$ without collapsing any dimension.

// The determinant thus answers the single most important structural question about a square matrix in a single number.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Computing Small Determinants`,
//     content: `The most direct way to build intuition is to compute by hand. The $2 \\times 2$ formula $ad - bc$ is immediate. The $3 \\times 3$ case requires either first-row expansion or the Sarrus shortcut. For $4 \\times 4$ matrices, no shortcut exists — the computation goes through cofactor expansion, but choosing a good row or column makes a significant difference.

// ## A 4×4 Example

// $$A = \\begin{pmatrix} 1 & 0 & 2 & -1 \\\\ 3 & 0 & 0 & 5 \\\\ 2 & 1 & 4 & -3 \\\\ 1 & 0 & 5 & 0 \\end{pmatrix}$$

// Column $2$ has three zeros and a single $1$ in position $(3,2)$, making it the best expansion axis. Expanding along column $2$:

// $$\\det(A) = (-1)^{3+2} \\cdot 1 \\cdot M_{32}$$

// where $M_{32}$ is the $3 \\times 3$ determinant obtained by deleting row $3$ and column $2$:

// $$M_{32} = \\det\\begin{pmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 5 \\\\ 1 & 5 & 0 \\end{pmatrix}$$

// Expanding this along its first row:

// $$M_{32} = 1(0 \\cdot 0 - 5 \\cdot 5) - 2(3 \\cdot 0 - 5 \\cdot 1) + (-1)(3 \\cdot 5 - 0 \\cdot 1)$$

// $$= 1(-25) - 2(-5) + (-1)(15) = -25 + 10 - 15 = -30$$

// So $\\det(A) = (-1)^{5} \\cdot 1 \\cdot (-30) = (-1)(-30) = 30$.

// The choice of column $2$ reduced the problem from four $3 \\times 3$ determinants down to one. This illustrates why scanning for zeros before expanding is the first step in any hand computation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Expanding by Minors and Cofactors`,
//     content: `The sub-determinants appearing in cofactor expansion have their own terminology. The $(i,j)$ minor $M_{ij}$ is the determinant of the submatrix formed by deleting row $i$ and column $j$ from $A$. The $(i,j)$ cofactor is the signed version:

// $$C_{ij} = (-1)^{i+j} M_{ij}$$

// The sign factor $(-1)^{i+j}$ follows a checkerboard pattern starting with $+$ at position $(1,1)$:

// $$\\begin{pmatrix} + & - & + & - & \\cdots \\\\ - & + & - & + & \\cdots \\\\ + & - & + & - & \\cdots \\\\ \\vdots & & & & \\ddots \\end{pmatrix}$$

// Using this notation, the Laplace expansion along row $i$ takes the compact form

// $$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij}$$

// and the expansion along column $j$ is

// $$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij}$$

// Both give the same result regardless of which row or column is chosen. Collecting all cofactors into a matrix and transposing produces the [adjugate](!/linear-algebra/determinants/cofactors), which leads to an explicit formula for the matrix inverse. The full development of minors, cofactors, the adjugate, and the structural results they enable is on the [cofactors](!/linear-algebra/determinants/cofactors) page.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `How Row Operations Affect the Determinant`,
//     content: `The three elementary row operations interact with the determinant in simple, predictable ways. Swapping two rows multiplies the determinant by $-1$. Multiplying a row by a nonzero scalar $k$ multiplies the determinant by $k$. Adding a scalar multiple of one row to a different row leaves the determinant unchanged.

// These three rules turn [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) into a determinant-computing algorithm. Reduce $A$ to upper triangular form using row operations, tracking every swap and every scaling. The determinant of the resulting triangular matrix is the product of its diagonal entries. Adjusting for the tracked sign flips and scale factors gives $\\det(A)$.

// This approach requires on the order of $n^3$ arithmetic operations — a dramatic improvement over the $n!$ cost of cofactor expansion. For any matrix larger than $4 \\times 4$, row reduction is the practical method.

// ## A Quick Illustration

// Starting from $A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 7 \\end{pmatrix}$, subtract $\\frac{3}{2}$ times row $1$ from row $2$ (this does not change the determinant) to get $\\begin{pmatrix} 2 & 4 \\\\ 0 & 1 \\end{pmatrix}$. The product of the diagonal is $2 \\cdot 1 = 2$, which matches $\\det(A) = 2 \\cdot 7 - 4 \\cdot 3 = 2$.

// The complete set of algebraic [properties](!/linear-algebra/determinants/properties) — including the multiplicative rule $\\det(AB) = \\det(A)\\det(B)$, transpose invariance, and the full invertibility equivalence — is developed on the properties page.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Area, Volume, and Orientation`,
//     content: `The determinant has a direct geometric meaning: it measures how a matrix, viewed as a [linear transformation](!/linear-algebra/transformations), distorts size and orientation.

// In two dimensions, $|\\det(A)|$ equals the area of the parallelogram spanned by the columns of $A$. In three dimensions, $|\\det(A)|$ equals the volume of the parallelepiped spanned by the three column vectors, which also equals the scalar triple product $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$. In $n$ dimensions, $|\\det(A)|$ is the factor by which the map $x \\mapsto Ax$ scales $n$-dimensional volumes.

// The sign carries its own meaning. A positive determinant means the transformation preserves orientation — counterclockwise stays counterclockwise in $\\mathbb{R}^2$, right-handed stays right-handed in $\\mathbb{R}^3$. A negative determinant means orientation is reversed. A zero determinant means the image is lower-dimensional: a $3 \\times 3$ transformation with $\\det = 0$ maps all of $\\mathbb{R}^3$ onto a plane, a line, or a point.

// Rotation matrices always have determinant $+1$. Reflection matrices always have determinant $-1$. These are the cleanest examples of orientation-preserving and orientation-reversing maps. The full geometric treatment, including the change-of-variables formula from multivariable calculus and explicit area and volume formulas, is on the [geometry](!/linear-algebra/determinants/geometry) page.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Determinant-Based Formulas`,
//     content: `The determinant is not only a diagnostic tool — it provides closed-form expressions for quantities that might otherwise require iterative procedures.

// Cramer's rule solves a [linear system](!/linear-algebra/linear-systems) $Ax = \\mathbf{b}$ by expressing each component of the solution as a ratio of two determinants: $x_i = \\det(A_i)/\\det(A)$, where $A_i$ is $A$ with its $i$-th column replaced by $\\mathbf{b}$. The adjugate formula gives the inverse of $A$ as $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$, writing every entry of the inverse explicitly in terms of cofactors. In the $2 \\times 2$ case, this reduces to the familiar swap-and-negate formula.

// The [cross product](!/linear-algebra/vectors/cross-product) $\\mathbf{a} \\times \\mathbf{b}$ in $\\mathbb{R}^3$ can be computed as a symbolic $3 \\times 3$ determinant with the unit vectors $\\hat{i}, \\hat{j}, \\hat{k}$ in the first row. The characteristic polynomial $\\det(A - \\lambda I)$ defines the [eigenvalues](!/linear-algebra/eigen) of $A$ — its roots are precisely the scalars $\\lambda$ for which $A - \\lambda I$ is singular. The Wronskian, a determinant built from functions and their derivatives, tests linear independence in the setting of differential equations.

// Each of these formulas is developed with full worked examples on the [applications](!/linear-algebra/determinants/applications) page.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// //   const introContent = {
// //   id: "intro",
// //   title: "",
// //   content: ``
// // }

// const introContent = {
//     id: "intro",
//   title: `A Single Number from a Square Matrix`,
//   content: `Every square matrix maps to a single scalar called its determinant. This value captures whether the matrix is invertible, how it scales geometric regions, and whether it preserves or reverses orientation. The determinant appears throughout linear algebra — in eigenvalue equations, system-solving formulas, and volume computations — making it one of the most information-dense quantities attached to a matrix.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is the determinant of a matrix?",
//     answer: "The determinant is a single scalar assigned to every square matrix. It determines invertibility (det ≠ 0 means invertible), measures how the matrix scales volume, and indicates whether orientation is preserved or reversed. Only square matrices have determinants.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is the formula for a 2×2 determinant?",
//     answer: "For A = [[a,b],[c,d]], det(A) = ad - bc. This equals the signed area of the parallelogram spanned by the column vectors. Zero means the columns are parallel; positive means counterclockwise arrangement; negative means clockwise.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How do you calculate a 3×3 determinant?",
//     answer: "Expand along the first row: det(A) = a₁₁(a₂₂a₃₃ - a₂₃a₃₂) - a₁₂(a₂₁a₃₃ - a₂₃a₃₁) + a₁₃(a₂₁a₃₂ - a₂₂a₃₁). Alternatively, use the Sarrus rule: sum downward diagonals minus upward diagonals. Sarrus only works for 3×3.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "How do you compute an n×n determinant?",
//     answer: "Use cofactor expansion: det(A) = Σ(-1)^(1+j) a₁ⱼ M₁ⱼ where M₁ⱼ is the (n-1)×(n-1) minor. This is recursive and costs O(n!) operations. For large matrices, row reduction to triangular form (O(n³)) is practical.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "What does det(A) = 0 mean?",
//     answer: "A zero determinant means the matrix is singular (not invertible). The columns are linearly dependent, the system Ax = 0 has nontrivial solutions, the rank is less than n, and the transformation collapses at least one dimension to zero volume.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "What is the best way to compute determinants by hand?",
//     answer: "For 2×2, use ad - bc. For 3×3, use first-row expansion or Sarrus rule. For 4×4+, use cofactor expansion along a row/column with the most zeros to minimize sub-determinants. Scan for zeros before expanding.",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "What are minors and cofactors?",
//     answer: "The (i,j) minor Mᵢⱼ is the determinant after deleting row i and column j. The cofactor Cᵢⱼ = (-1)^(i+j)Mᵢⱼ includes the checkerboard sign. Expansion along any row or column using cofactors gives the same determinant.",
//     sectionId: "7"
//   },
//   obj8: {
//     question: "How do row operations affect the determinant?",
//     answer: "Swapping rows multiplies det by -1. Scaling a row by k multiplies det by k. Adding a multiple of one row to another leaves det unchanged. These rules enable O(n³) computation via row reduction to triangular form.",
//     sectionId: "8"
//   },
//   obj9: {
//     question: "What is the geometric meaning of the determinant?",
//     answer: "|det(A)| equals the scaling factor for n-dimensional volume: area in 2D, volume in 3D. The sign indicates orientation: positive preserves (counterclockwise/right-handed), negative reverses. Zero means collapse to lower dimension.",
//     sectionId: "9"
//   },
//   obj10: {
//     question: "What formulas use the determinant?",
//     answer: "Cramer's rule: xᵢ = det(Aᵢ)/det(A). Inverse: A⁻¹ = adj(A)/det(A). Cross product via 3×3 determinant with unit vectors. Characteristic polynomial det(A - λI) for eigenvalues. Wronskian for function independence.",
//     sectionId: "10"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Determinants",
//     "description": "Learn matrix determinants: 2×2 and 3×3 formulas, cofactor expansion, Sarrus rule, row operations, singular vs invertible matrices, geometric interpretation as volume and orientation, and applications.",
//     "url": "https://www.learnmathclass.com/linear-algebra/determinants",
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
//       "name": "Matrix Determinants"
//     },
//     "teaches": [
//       "2×2 and 3×3 determinant formulas",
//       "Cofactor expansion for n×n matrices",
//       "Sarrus rule for 3×3 determinants",
//       "Singular vs nonsingular matrices",
//       "Row operations and determinant",
//       "Geometric interpretation as volume",
//       "Minors and cofactors",
//       "Determinant-based formulas"
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
//         "name": "Determinants",
//         "item": "https://www.learnmathclass.com/linear-algebra/determinants"
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
//   props: {
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Determinants: Formula, Properties & Applications | Learn Math Class",
//       description: "Learn matrix determinants: 2×2 and 3×3 formulas, cofactor expansion, Sarrus rule, row operations, singular vs invertible matrices, geometric interpretation as volume and orientation, and applications.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/determinants",
//       name: "Determinants"
//     },
//   }
// }
//    }
// export default function DeterminantsPage({seoData, sectionsContent, introContent, schemas}) {
    
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
//         ]
//     },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
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
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//  <Head>
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Determinants</h1>
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



// tables-optimized: v4 | 2026-05-18 | 3 tables (obj8 aggregation, obj10 aggregation, obj11 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import determinantDiagrams from '@/app/components/linear-algebra copy/determinants/determinantDiagrams'
import linearTransformationDiagrams from '@/app/components/linear-algebra copy/r2-visualizers/linear-transformations/linearTransformationDiagrams'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'



export async function getStaticProps(){
const keyWords = [
  "determinant",
  "matrix determinant",
  "determinant formula",
  "2x2 determinant",
  "3x3 determinant",
  "cofactor expansion",
  "singular matrix",
  "invertible matrix determinant",
  "determinant row operations",
  "minors and cofactors",
  "Sarrus rule",
  "determinant volume",
  "Laplace expansion",
  "det A"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj8 — aggregation: how each elementary row operation affects det
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Row operation</th>
      <th style="${tableHeaders.aggregation}">Effect on det(A)</th>
      <th style="${tableHeaders.aggregation}">Adjustment when reading off det from triangular form</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Swap two rows</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiplies det by −1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">flip the sign once per swap</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multiply a row by k ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiplies det by k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">divide the final product by k</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Add a multiple of one row to another</td>
      <td style="padding: 12px 15px; color: #34495e;">leaves det unchanged</td>
      <td style="padding: 12px 15px; color: #34495e;">no adjustment</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — aggregation: determinant-based formulas
  const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">Expression</th>
      <th style="${tableHeaders.aggregation}">What it computes</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/determinants/applications" style="${linkStyle}">Cramer&apos;s rule</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>i</sub> = det(A<sub>i</sub>) / det(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">each component of the unique solution to Ax = b</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/determinants/cofactors" style="${linkStyle}">Adjugate formula</a> for A<sup>−1</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>−1</sup> = adj(A) / det(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">explicit closed form for the matrix inverse</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/vectors/cross-product" style="${linkStyle}">Cross product</a> in ℝ<sup>3</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a × b = symbolic 3×3 det with î, ĵ, k̂ on top</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">vector perpendicular to a and b with prescribed length</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/eigen" style="${linkStyle}">Characteristic polynomial</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">det(A − λI)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">polynomial whose roots are the eigenvalues of A</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Wronskian</td>
      <td style="padding: 12px 15px; color: #34495e;">determinant of functions and their derivatives</td>
      <td style="padding: 12px 15px; color: #34495e;">linear independence test for solutions of an ODE</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: methods of computing the determinant
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 98%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">Formula / approach</th>
      <th style="${tableHeaders.summary}">Best for</th>
      <th style="${tableHeaders.summary} text-align: center;">Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#2" style="${linkStyle}">2×2 formula</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ad − bc</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every 2×2 case — direct, no tricks needed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">O(1)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#3" style="${linkStyle}">3×3 (first-row expansion or Sarrus)</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum of three 2×2 dets with alternating signs; or downward minus upward diagonal products</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3×3 only; Sarrus does not generalize</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">O(1)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#4" style="${linkStyle}">Cofactor expansion</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Σ (−1)<sup>i+j</sup> a<sub>ij</sub> M<sub>ij</sub> along any row or column</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">small matrices, especially when a row or column has many zeros</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">O(n!)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="#8" style="${linkStyle}">Row reduction</a></td>
      <td style="padding: 12px 15px; color: #34495e;">reduce to triangular form, multiply the diagonal, adjust for tracked swaps and scalings</td>
      <td style="padding: 12px 15px; color: #34495e;">any matrix 4×4 or larger; the standard general-purpose method</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">O(n<sup>3</sup>)</td>
    </tr>
  </tbody>
</table>
`

  // Concept introduction (section 1) — template F, collapse. Running
  // instance: A = [[3, 1], [2, 5]], the worked example of section 2
  // (det = 13). Section 1 had no widgets; its old text stays in
  // sectionsContent.obj1, unused. The formula itself stays in section 2.
  const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
  const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
    cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
  const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
  const ciBothTable = ciTableOpen(['columns', 'area of the parallelogram', 'ad − bc']) +
    ciRow(['(3, 2) and (1, 5)', '28 − 15 = 13', '3·5 − 1·2 = 13'], { color: '#2563EB', cols: [1, 2] }) +
    ciRow(['(2, 0) and (0, 3)', 'a 2 × 3 rectangle: 6', '2·3 − 0·0 = 6'], { shade: true }) +
    ciRow(['(1, 2) and (2, 4)', 'on one line: 0', '1·4 − 2·2 = 0'], { last: true }) +
    '</tbody></table>'
  const ciRulesTable = ciTableOpen(['change to the columns', 'area', 'ad − bc']) +
    ciRow(['slide one column along the other (add a multiple of it)', 'unchanged', 'unchanged']) +
    ciRow(['stretch one column by a factor k', 'times k', 'times k'], { shade: true }) +
    ciRow(['start from the unit square, columns (1, 0) and (0, 1)', '1', '1·1 − 0·0 = 1'], { last: true }) +
    '</tbody></table>'
  const fpCiPara = { kind: 'pieces', svgTitle: 'The columns (3, 2) and (1, 5) span a parallelogram of area 13', xRange: [0, 4.5], yRange: [0, 7.5],
    pieces: [
      { fn: (x) => (2 / 3) * x, from: 0, to: 3, ends: [null, null], color: 'f', label: { text: 'column (3, 2)', x: 2.4, y: 1.3, pos: 'se' } },
      { fn: (x) => 5 * x, from: 0, to: 1, ends: [null, null], color: 'g', label: { text: 'column (1, 5)', x: 0.75, y: 3, pos: 'e' } },
      { fn: (x) => 5 * x - 13, from: 3, to: 4, ends: [null, null], color: 'g' },
      { fn: (x) => (2 / 3) * x + 13 / 3, from: 1, to: 4, ends: [null, null], color: 'f' },
    ],
    points: [{ x: 3, y: 2 }, { x: 1, y: 5 }, { x: 4, y: 7 }],
    notes: [{ x: 1.7, y: 3.9, text: 'area 13', pos: 'e', color: 'r' }],
    caption: 'The two columns span a parallelogram of area 13' };

  const conceptIntroFigures = {
    para: renderFunctionPlotV4(fpCiPara),
    bothTable: ciBothTable,
    rulesTable: ciRulesTable,
  };

  const sectionsContent = {
  obj1: {
    title: `The Determinant as a Scalar Assignment`,
    content: `Every square matrix $A$ of size $n \\times n$ has a single real number (or complex number, if the entries are complex) associated with it, written $\\det(A)$ or $|A|$. This number is called the determinant. It is defined only for square matrices — a rectangular matrix has no determinant.

The notation $|A|$ is widespread but potentially confusing, since the same vertical bars denote absolute value for real numbers and modulus for complex numbers. When there is any risk of ambiguity, $\\det(A)$ is preferred.

The determinant encodes a remarkable amount of structural information. Its most fundamental role is as an invertibility test: $A$ is [invertible](!/linear-algebra/matrix/inverse) if and only if $\\det(A) \\neq 0$. But it also measures how the linear map $x \\mapsto Ax$ distorts volume, determines whether that map preserves or reverses orientation, and appears in explicit formulas for eigenvalues, matrix inverses, and solutions to linear systems. The next several sections develop the determinant starting from the smallest cases and building toward the general definition.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The 2×2 Formula`,
    content: `For a $2 \\times 2$ matrix

@academic[formula_callout:The 2×2 Formula
$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$]@

the determinant is

@academic[formula_callout:The 2×2 Formula
$$\\det(A) = ad - bc$$]@

One way to see where this formula comes from is to solve the system $Ax = \\mathbf{v}$ for a general right-hand side. Applying elimination, the solution involves dividing by $ad - bc$ at every step. When $ad - bc = 0$, the system either has no solution or infinitely many, and the matrix cannot be inverted. When $ad - bc \\neq 0$, there is a unique solution for every $\\mathbf{v}$, and the inverse exists.

@academic[pitfall,aside:true,width:35%:Subtracting in the wrong order
Taking $bc - ad$ for $\\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$ gives $1 \\cdot 2 - 3 \\cdot 5 = -13$, the right size with the wrong sign. The main diagonal comes first: $ad - bc = 15 - 2 = 13$.
[Read more](!#pitfalls)]@

The expression $ad - bc$ also carries geometric meaning. The columns of $A$ are the vectors $(a, c)$ and $(b, d)$ in $\\mathbb{R}^2$. The signed area of the parallelogram these two vectors span equals exactly $ad - bc$. A positive value means the columns are arranged counterclockwise; a negative value means clockwise; zero means the columns are parallel and the parallelogram collapses to a line segment.

## Worked Examples

For $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$, the determinant is $3 \\cdot 5 - 1 \\cdot 2 = 13$. The matrix is invertible and its column vectors span a parallelogram of area $13$.

For $A = \\begin{pmatrix} 4 & 6 \\\\ 2 & 3 \\end{pmatrix}$, the determinant is $4 \\cdot 3 - 6 \\cdot 2 = 0$. The second column is $\\frac{3}{2}$ times the first, so the columns are parallel and the matrix is singular.

For $A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$, the determinant is $0 \\cdot 0 - (-1) \\cdot 1 = 1$. This is a $90°$ rotation matrix — it preserves areas and orientation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The 3×3 Formula`,
    content: `For a $3 \\times 3$ matrix

@academic[formula_callout:The 3×3 Formula
$$A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix}$$]@

the determinant is computed by expanding along the first row:

@academic[formula_callout:Determinant 3x3
$$\\det(A) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$
/linear-algebra/formulas#determinant_3x3]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Each first-row entry multiplies the $2 \\times 2$ determinant of the submatrix that remains after deleting that entry's row and column. The signs alternate: $+, -, +$.

## The Sarrus Mnemonic

A shortcut for the $3 \\times 3$ case is the rule of Sarrus. Write the matrix and copy its first two columns to the right:

@academic[formula_callout:The 3×3 Formula
$$\\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix} \\begin{matrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{matrix}$$]@

Sum the three products along the downward diagonals, then subtract the three products along the upward diagonals. This gives the same result as the first-row expansion. The Sarrus rule works only for $3 \\times 3$ matrices — there is no analogous diagonal trick for $4 \\times 4$ or larger.

## Worked Example

For $A = \\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & -1 & 4 \\\\ 5 & 2 & 3 \\end{pmatrix}$, expanding along the first row:

@academic[formula_callout:The 3×3 Formula
$$\\det(A) = 2[(-1)(3) - (4)(2)] - 3[(0)(3) - (4)(5)] + 1[(0)(2) - (-1)(5)]$$]@

@academic[formula_callout:The 3×3 Formula
$$= 2(-3 - 8) - 3(0 - 20) + 1(0 + 5) = 2(-11) - 3(-20) + 5 = -22 + 60 + 5 = 43$$]@

@academic[pitfall,aside:true,width:35%:Adding all three terms
Adding the terms instead of alternating the signs gives $2(-11) + 3(-20) + 1(5) = -77$. The middle term is subtracted: $2(-11) - 3(-20) + 1(5) = 43$.
[Read more](!#pitfalls)]@

The same result follows from the Sarrus rule: downward diagonals give $2(-1)(3) + 3(4)(5) + 1(0)(2) = -6 + 60 + 0 = 54$; upward diagonals give $1(-1)(5) + 2(4)(2) + 3(0)(3) = -5 + 16 + 0 = 11$; the determinant is $54 - 11 = 43$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The General n×n Determinant`,
    content: `The pattern from the $3 \\times 3$ case extends to any dimension. For an $n \\times n$ matrix, expand along the first row:

@academic[formula_callout:The General n×n Determinant
$$\\det(A) = \\sum_{j=1}^{n} (-1)^{1+j} \\, a_{1j} \\, M_{1j}$$]@

where $M_{1j}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix obtained by deleting row $1$ and column $j$. This is a recursive definition: each $n \\times n$ determinant reduces to $n$ determinants of size $(n-1) \\times (n-1)$, each of which reduces further, until reaching the base case of $1 \\times 1$ matrices where $\\det(a) = a$.

A crucial fact is that the expansion need not use the first row.

@academic[rule_theorem_plain:Expanding along any row or any column gives the same result.]@

The signed sub-determinants $(-1)^{i+j} M_{ij}$ are called [cofactors](!/linear-algebra/determinants/cofactors), and the freedom to choose the expansion axis is what makes the formula practical: a row or column with many zeros dramatically reduces the number of terms.

The recursive nature of this definition means the computational cost grows factorially. An $n \\times n$ determinant via cofactor expansion requires on the order of $n!$ arithmetic operations. For $n = 5$ that is $120$ operations; for $n = 10$ it is over $3.6$ million. This explosion is what motivates the row-reduction approach, which accomplishes the same task in $O(n^3)$ operations by exploiting how [row operations](!/linear-algebra/determinants/properties) affect the determinant.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Singular and Nonsingular Matrices`,
    content: `The value $\\det(A) = 0$ marks a sharp dividing line. A square matrix with zero determinant is called singular; a square matrix with nonzero determinant is called nonsingular or invertible.

@academic[rule_theorem_plain:When $\\det(A) = 0$, the columns of $A$ are [linearly dependent](!/linear-algebra/vector-spaces/linear-independence) — at least one column can be written as a linear combination of the others.]@

The homogeneous system $Ax = \\mathbf{0}$ has nontrivial solutions, the rank of $A$ is strictly less than $n$, and the matrix maps $\\mathbb{R}^n$ onto a lower-dimensional subspace. Geometrically, the transformation collapses at least one dimension, flattening regions of positive volume down to zero volume.

When $\\det(A) \\neq 0$, everything works. The columns of $A$ form a [basis](!/linear-algebra/vector-spaces/basis) for $\\mathbb{R}^n$. The system $Ax = \\mathbf{b}$ has exactly one solution for every right-hand side $\\mathbf{b}$. The matrix has an inverse $A^{-1}$, and the linear map $x \\mapsto Ax$ is a bijection from $\\mathbb{R}^n$ to itself that stretches or compresses volumes by the factor $|\\det(A)|$ without collapsing any dimension.

The determinant thus answers the single most important structural question about a square matrix in a single number.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Computing Small Determinants`,
    content: `The most direct way to build intuition is to compute by hand. The $2 \\times 2$ formula $ad - bc$ is immediate. The $3 \\times 3$ case requires either first-row expansion or the Sarrus shortcut. For $4 \\times 4$ matrices, no shortcut exists — the computation goes through cofactor expansion, but choosing a good row or column makes a significant difference.

## A 4×4 Example

@academic[formula_callout:Computing Small Determinants
$$A = \\begin{pmatrix} 1 & 0 & 2 & -1 \\\\ 3 & 0 & 0 & 5 \\\\ 2 & 1 & 4 & -3 \\\\ 1 & 0 & 5 & 0 \\end{pmatrix}$$]@

Column $2$ has three zeros and a single $1$ in position $(3,2)$, making it the best expansion axis. Expanding along column $2$:

@academic[formula_callout:Computing Small Determinants
$$\\det(A) = (-1)^{3+2} \\cdot 1 \\cdot M_{32}$$]@

where $M_{32}$ is the $3 \\times 3$ determinant obtained by deleting row $3$ and column $2$:

@academic[formula_callout:Computing Small Determinants
$$M_{32} = \\det\\begin{pmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 5 \\\\ 1 & 5 & 0 \\end{pmatrix}$$]@

Expanding this along its first row:

@academic[formula_callout:Computing Small Determinants
$$M_{32} = 1(0 \\cdot 0 - 5 \\cdot 5) - 2(3 \\cdot 0 - 5 \\cdot 1) + (-1)(3 \\cdot 5 - 0 \\cdot 1)$$]@

@academic[formula_callout:Computing Small Determinants
$$= 1(-25) - 2(-5) + (-1)(15) = -25 + 10 - 15 = -30$$]@

So $\\det(A) = (-1)^{5} \\cdot 1 \\cdot (-30) = (-1)(-30) = 30$.

@academic[pitfall,aside:true,width:35%:Reusing the first-row signs
Applying the first-row pattern $+, -, +, -$ down column $2$ gives the entry at $(3,2)$ the sign $+$ and $\\det(A) = -30$. The sign comes from the position, $(-1)^{3+2} = -1$, so $\\det(A) = 30$.
[Read more](!#pitfalls)]@

The choice of column $2$ reduced the problem from four $3 \\times 3$ determinants down to one. This illustrates why scanning for zeros before expanding is the first step in any hand computation.

To compute the determinant of a specific matrix, use the [matrix calculator](!/linear-algebra/calculators/matrix).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Expanding by Minors and Cofactors`,
    content: `The sub-determinants appearing in cofactor expansion have their own terminology. The $(i,j)$ minor $M_{ij}$ is the determinant of the submatrix formed by deleting row $i$ and column $j$ from $A$. The $(i,j)$ cofactor is the signed version:

@academic[formula_callout:Cofactor Definition
$$C_{ij} = (-1)^{i+j} M_{ij}$$
/linear-algebra/formulas#cofactor_definition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The sign factor $(-1)^{i+j}$ follows a checkerboard pattern starting with $+$ at position $(1,1)$:

@academic[formula_callout:Expanding by Minors and Cofactors
$$\\begin{pmatrix} + & - & + & - & \\cdots \\\\ - & + & - & + & \\cdots \\\\ + & - & + & - & \\cdots \\\\ \\vdots & & & & \\ddots \\end{pmatrix}$$]@

Using this notation, the Laplace expansion along row $i$ takes the compact form

@academic[formula_callout:Expanding by Minors and Cofactors
$$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij}$$]@

and the expansion along column $j$ is

@academic[formula_callout:Expanding by Minors and Cofactors
$$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij}$$]@

Both give the same result regardless of which row or column is chosen. Collecting all cofactors into a matrix and transposing produces the [adjugate](!/linear-algebra/determinants/cofactors), which leads to an explicit formula for the matrix inverse. The full development of minors, cofactors, the adjugate, and the structural results they enable is on the [cofactors](!/linear-algebra/determinants/cofactors) page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `How Row Operations Affect the Determinant`,
    content: `The three elementary row operations interact with the determinant in simple, predictable ways. Swapping two rows multiplies the determinant by $-1$. Multiplying a row by a nonzero scalar $k$ multiplies the determinant by $k$. Adding a scalar multiple of one row to a different row leaves the determinant unchanged.

@academic[pitfall,aside:true,width:35%:Scaling the whole matrix once
Writing $\\det(2A) = 2\\det(A)$ for $A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 7 \\end{pmatrix}$ gives $4$. Doubling $A$ doubles both rows, so $\\det(2A) = 2^2 \\cdot 2 = 8$; in general $\\det(kA) = k^n \\det(A)$.
[Read more](!#pitfalls)]@

These three rules turn [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) into a determinant-computing algorithm. Reduce $A$ to upper triangular form using row operations, tracking every swap and every scaling. The determinant of the resulting triangular matrix is the product of its diagonal entries. Adjusting for the tracked sign flips and scale factors gives $\\det(A)$.

This approach requires on the order of $n^3$ arithmetic operations — a dramatic improvement over the $n!$ cost of cofactor expansion. For any matrix larger than $4 \\times 4$, row reduction is the practical method.

## A Quick Illustration

@academic[pitfall,aside:true,width:35%:Forgetting to undo a scaling
Dividing row $1$ of $\\begin{pmatrix} 2 & 4 \\\\ 3 & 7 \\end{pmatrix}$ by $2$ and then clearing below the pivot gives $\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$, with diagonal product $1$. That division halved the determinant, so $\\det(A) = 2 \\cdot 1 = 2$.
[Read more](!#pitfalls)]@

Starting from $A =\\begin{pmatrix} 2 & 4 \\\\ 3 & 7 \\end{pmatrix}$, subtract $\\frac{3}{2}$ times row $1$ from row $2$ (this does not change the determinant) to get $\\begin{pmatrix} 2 & 4 \\\\ 0 & 1 \\end{pmatrix}$. The product of the diagonal is $2 \\cdot 1 = 2$, which matches $\\det(A) = 2 \\cdot 7 - 4 \\cdot 3 = 2$.

The complete set of algebraic [properties](!/linear-algebra/determinants/properties) — including the multiplicative rule $\\det(AB) = \\det(A)\\det(B)$, transpose invariance, and the full invertibility equivalence — is developed on the properties page. The three rules above collect into a compact reference:`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Area, Volume, and Orientation`,
    content: `The determinant has a direct geometric meaning: it measures how a matrix, viewed as a [linear transformation](!/linear-algebra/transformations), distorts size and orientation.

In two dimensions, $|\\det(A)|$ equals the area of the parallelogram spanned by the columns of $A$. In three dimensions, $|\\det(A)|$ equals the volume of the parallelepiped spanned by the three column vectors, which also equals the scalar triple product $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$.

@academic[rule_theorem_plain:In $n$ dimensions, $|\\det(A)|$ is the factor by which the map $x \\mapsto Ax$ scales $n$-dimensional volumes.]@

The sign carries its own meaning. A positive determinant means the transformation preserves orientation — counterclockwise stays counterclockwise in $\\mathbb{R}^2$, right-handed stays right-handed in $\\mathbb{R}^3$. A negative determinant means orientation is reversed. A zero determinant means the image is lower-dimensional: a $3 \\times 3$ transformation with $\\det = 0$ maps all of $\\mathbb{R}^3$ onto a plane, a line, or a point.

Rotation matrices always have determinant $+1$. Reflection matrices always have determinant $-1$. These are the cleanest examples of orientation-preserving and orientation-reversing maps. The full geometric treatment, including the change-of-variables formula from multivariable calculus and explicit area and volume formulas, is on the [geometry](!/linear-algebra/determinants/geometry) page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Determinant-Based Formulas`,
    content: `The determinant is not only a diagnostic tool — it provides closed-form expressions for quantities that might otherwise require iterative procedures.

Cramer's rule solves a [linear system](!/linear-algebra/linear-systems) $Ax = \\mathbf{b}$ by expressing each component of the solution as a ratio of two determinants: $x_i = \\det(A_i)/\\det(A)$, where $A_i$ is $A$ with its $i$-th column replaced by $\\mathbf{b}$. The adjugate formula gives the inverse of $A$ as $A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$, writing every entry of the inverse explicitly in terms of cofactors. In the $2 \\times 2$ case, this reduces to the familiar swap-and-negate formula.

The [cross product](!/linear-algebra/vectors/cross-product) $\\mathbf{a} \\times \\mathbf{b}$ in $\\mathbb{R}^3$ can be computed as a symbolic $3 \\times 3$ determinant with the unit vectors $\\hat{i}, \\hat{j}, \\hat{k}$ in the first row. The characteristic polynomial $\\det(A - \\lambda I)$ defines the [eigenvalues](!/linear-algebra/eigen) of $A$ — its roots are precisely the scalars $\\lambda$ for which $A - \\lambda I$ is singular. The Wronskian, a determinant built from functions and their derivatives, tests linear independence in the setting of differential equations.

Each of these formulas is developed with full worked examples on the [applications](!/linear-algebra/determinants/applications) page. The five collect into a single reference card:`,
    before: ``,
    after: ``,
    link: ``,
  },
  // NEW capstone section: obj11
  obj11: {
    title: `Summary: How to Compute a Determinant`,
    content: `Across the methods covered above, four routes lead to $\\det(A)$ — the closed-form $2\\times 2$ formula, the closed-form $3\\times 3$ expansion (or Sarrus), general cofactor expansion, and row reduction. Each is the right choice in a different regime, distinguished by matrix size, sparsity of the matrix, and whether the work needs to scale to large $n$. The table below collects all four side by side on the underlying formula, the situation it suits best, and the asymptotic cost.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj12: {
    title: `Common Pitfalls`,
    content: `Six mistakes account for many wrong determinants. Five are marked with a box where they happen in the sections above, and the sixth, a diagonal shortcut used on a $4 \\times 4$ matrix, is flagged in the section on the $3 \\times 3$ formula. Here each is worked through in full, with the wrong and the right working side by side.

**Subtracting in the wrong order**

The $2 \\times 2$ formula is applied with its two products the wrong way round: the product of the other diagonal comes first, and the main-diagonal product is subtracted from it.

Wrong working: for $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$,
$$bc - ad = 1 \\cdot 2 - 3 \\cdot 5 = 2 - 15 = -13$$

Right working: the main diagonal $a, d$ comes first.
$$ad - bc = 3 \\cdot 5 - 1 \\cdot 2 = 15 - 2 = 13$$

Why it happens: both products are formed correctly and only their order is swapped. The two results differ only in sign, so the wrong one looks just as plausible.

How to check: the identity matrix must give $1$. With $ad - bc$, $\\det(I) = 1 \\cdot 1 - 0 \\cdot 0 = 1$; with the order reversed it gives $-1$.

**Adding all three terms**

In the first-row expansion of a $3 \\times 3$ determinant, the three terms are added as if every sign were $+$. The middle term should be subtracted.

Wrong working: for the matrix of the worked example, $A = \\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & -1 & 4 \\\\ 5 & 2 & 3 \\end{pmatrix}$,
$$2(-11) + 3(-20) + 1(5) = -22 - 60 + 5 = -77$$

Right working: the signs alternate $+, -, +$.
$$2(-11) - 3(-20) + 1(5) = -22 + 60 + 5 = 43$$

Why it happens: the three $2 \\times 2$ determinants are computed carefully, and the sign in front of the middle one is lost when the terms are put together. A negative middle value, as here, makes the slip easier, because two minus signs have to combine into a plus.

How to check: compute the same determinant with the rule of Sarrus, which has no position signs to forget. For this matrix it gives $54 - 11 = 43$.

**Using the diagonal rule on a 4×4 matrix**

The rule of Sarrus is stretched to a $4 \\times 4$ matrix: the first three columns are copied to the right, and the four downward diagonal products minus the four upward ones are taken as the determinant.

Wrong working: for the $4 \\times 4$ matrix of the section on small determinants, $A = \\begin{pmatrix} 1 & 0 & 2 & -1 \\\\ 3 & 0 & 0 & 5 \\\\ 2 & 1 & 4 & -3 \\\\ 1 & 0 & 5 & 0 \\end{pmatrix}$, the downward diagonals give $0$, $0$, $0$ and $(-1)(3)(1)(5) = -15$, and all four upward diagonals give $0$. The result would be $-15 - 0 = -15$.

Right working: expand along column $2$, which has a single nonzero entry.
$$\\det(A) = (-1)^{3+2} \\cdot 1 \\cdot M_{32} = (-1)(-30) = 30$$

Why it happens: the diagonal picture is easy to remember, and nothing in it seems tied to the size $3$. But a $4 \\times 4$ determinant has $4! = 24$ products, and the diagonals reach only $8$ of them.

How to check: count the products. A determinant of size $n$ has $n!$ of them, a diagonal rule of this kind produces $2n$, and the two counts agree only for $n = 3$.

**Reusing the first-row signs**

When a determinant is expanded along a row or column other than the first row, the signs are taken from the first-row pattern $+, -, +, -$ in the order the entries are used, instead of from their positions.

Wrong working: in the $4 \\times 4$ example, the expansion along column $2$ has a single term, from the entry $1$ at position $(3,2)$. Running $+, -, +, -$ down the column gives row $3$ the sign $+$:
$$\\det(A) = +1 \\cdot M_{32} = 1 \\cdot (-30) = -30$$

Right working: the sign of position $(i,j)$ is $(-1)^{i+j}$. For $(3,2)$ it is $(-1)^{5} = -1$, so
$$\\det(A) = (-1) \\cdot 1 \\cdot (-30) = 30$$

Why it happens: most worked expansions use the first row, where the pattern does start with $+$. Column $2$ starts with $-$, and so does row $2$.

How to check: read the sign off the checkerboard pattern in the section on minors and cofactors. Position $(3,2)$ sits on a $-$ square.

**Scaling the whole matrix once**

The rule for scaling one row is applied to a multiple of the whole matrix: $\\det(kA)$ is taken to be $k\\det(A)$.

Wrong working: for $A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 7 \\end{pmatrix}$, with $\\det(A) = 2$,
$$\\det(2A) = 2\\det(A) = 4$$

Right working: $2A$ multiplies each of the $2$ rows by $2$, and each row contributes its own factor.
$$\\det(2A) = \\det\\begin{pmatrix} 4 & 8 \\\\ 6 & 14 \\end{pmatrix} = 4 \\cdot 14 - 8 \\cdot 6 = 56 - 48 = 8 = 2^2 \\cdot 2$$
For an $n \\times n$ matrix, $\\det(kA) = k^n \\det(A)$.

Why it happens: multiplying a matrix by $k$ looks like one operation, but it scales all $n$ rows at once, and the row rule counts each of them.

How to check: try $A = I$. The matrix $kI$ is diagonal with $n$ entries equal to $k$, so its determinant is $k^n$, not $k$.

**Forgetting to undo a scaling**

During row reduction a row is divided by its pivot to make the pivot $1$, and the diagonal product of the final triangular matrix is reported as the determinant without accounting for that division.

Wrong working: for $A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 7 \\end{pmatrix}$, divide row $1$ by $2$ to get $\\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$, then subtract $3$ times row $1$ from row $2$:
$$\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}, \\quad 1 \\cdot 1 = 1$$

Right working: dividing row $1$ by $2$ divided the determinant by $2$, so the product is multiplied back by $2$.
$$\\det(A) = 2 \\cdot (1 \\cdot 1) = 2$$
This matches $2 \\cdot 7 - 4 \\cdot 3 = 2$.

Why it happens: making every pivot equal to $1$ is a habit from solving linear systems, where scaling a row does not change the solution. For a determinant it does change the value.

How to check: keep a running factor beside the reduction and multiply by it at the end. Or avoid scaling altogether: row additions alone, as in the illustration of the row-operations section, leave the determinant unchanged.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
    id: "intro",
  title: `A Single Number from a Square Matrix`,
  content: `Every square matrix maps to a single scalar called its determinant. This value captures whether the matrix is invertible, how it scales geometric regions, and whether it preserves or reverses orientation. The determinant appears throughout linear algebra — in eigenvalue equations, system-solving formulas, and volume computations — making it one of the most information-dense quantities attached to a matrix.`,
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Determinants",
    "description": "Learn matrix determinants: 2×2 and 3×3 formulas, cofactor expansion, Sarrus rule, row operations, singular vs invertible matrices, geometric interpretation as volume and orientation, and applications.",
    "url": "https://www.learnmathclass.com/linear-algebra/determinants",
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
      "name": "Matrix Determinants"
    },
    "teaches": [
      "2×2 and 3×3 determinant formulas",
      "Cofactor expansion for n×n matrices",
      "Sarrus rule for 3×3 determinants",
      "Singular vs nonsingular matrices",
      "Row operations and determinant",
      "Geometric interpretation as volume",
      "Minors and cofactors",
      "Determinant-based formulas",
      "Side-by-side summary of the four computation routes with cost and best-use guidance"
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
        "name": "Determinants",
        "item": "https://www.learnmathclass.com/linear-algebra/determinants"
      }
    ]
  },
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.

  const demoUnits = {
    sarrus: demoUnitFrame({
      svg: determinantDiagrams.sarrus,
      caption: 'The six signed products of a 3&#215;3',
      text: 'Three diagonals running one way are added and three running the other are subtracted &#8212; six products in total, each using one entry from every row and every column. The pattern is a convenience for this size only: it does not extend to 4&#215;4, where the count jumps to twenty-four. Watch the diagonals traced out on the',
      href: '/linear-algebra/visual-tools/matrix-determinant',
      linkText: 'determinant visualizer',
    }),
    cofactor: demoUnitFrame({
      svg: determinantDiagrams["cofactor-row"],
      caption: 'Expansion along a row, minors highlighted',
      text: 'For each entry of the chosen row, its own row and column are struck out and the determinant of what remains is taken, then signed and weighted. Any row or column gives the same answer, so the one with the most zeros is always the cheapest to pick. Choose a different row or column and compare on the',
      href: '/linear-algebra/visual-tools/matrix-determinant',
      linkText: 'determinant visualizer',
    }),
    // Area and orientation are geometric claims; the determinant tool
    // is symbolic, so the transformation explorer carries this one.
    area: demoUnitFrame({
      svg: [linearTransformationDiagrams.fullRank, linearTransformationDiagrams.rankOne],
      caption: 'A grid stretched, then flattened',
      text: 'Above, the unit square has become a parallelogram and its area is exactly the determinant. Below, the matrix has flattened the plane onto a line: the parallelogram has no area left and the determinant is zero. Singularity and zero area are the same event seen from two sides. Change the entries and watch the area respond on the',
      href: '/linear-algebra/visual-tools/linear-transformation-2d',
      linkText: 'linear transformation explorer',
    }),
    twoByTwo: demoUnitFrame({
      svg: determinantDiagrams.diagonal,
      caption: 'ad, the first half of ad &#8722; bc',
      text: 'The 2 &#215; 2 determinant is built from the two diagonals of the square. Here the main diagonal is lit: a<sub>11</sub> and a<sub>22</sub>, whose product is the ad term. The anti-diagonal, a<sub>12</sub> and a<sub>21</sub>, supplies bc, and the determinant is the first product minus the second. Step through both diagonals and the subtraction on the',
      href: '/linear-algebra/visual-tools/matrix-determinant',
      linkText: 'determinant visualizer',
    }),
  };

  const singularCases = {
    prefaceTitle: 'A sharp dividing line',
    preface: 'The value $\\det(A) = 0$ splits square matrices in two. The determinant answers the single most important structural question about a square matrix in a single number.',
    conclusionTitle: 'Takeaway',
    conclusion: 'A nonsingular matrix stretches or compresses volumes by $|\\det(A)|$ without collapsing any dimension; a singular one flattens regions of positive volume down to zero volume.',
    parent: {
      kicker: 'Square matrix',
      formula: '$\\det(A)$, $A$ is $n \\times n$',
      splitBy: 'whether $\\det(A) = 0$',
    },
    cases: [
      {
        id: 'singular', condition: '$\\det(A) = 0$',
        count: { n: '0' },
        headline: 'Singular',
        desc: 'the columns are linearly dependent, $Ax = \\mathbf{0}$ has nontrivial solutions, the rank is less than $n$, and at least one dimension collapses',
        details: 'See [linear dependence](!/linear-algebra/vector-spaces/linear-independence).',
      },
      {
        id: 'nonsingular', condition: '$\\det(A) \\neq 0$',
        count: { n: '✓' },
        headline: 'Nonsingular (invertible)',
        desc: 'the columns form a basis, $Ax = \\mathbf{b}$ has exactly one solution for every $\\mathbf{b}$, and $A^{-1}$ exists',
        details: 'The map $x \\mapsto Ax$ is a bijection from $\\mathbb{R}^n$ to itself. See [basis](!/linear-algebra/vector-spaces/basis).',
      },
    ],
  };

  const detRowOpTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Row operations change the determinant predictably',
    preface: 'Each of the three row operations has a fixed effect on $\\det(A)$. That is what makes reduction to triangular form a fast way to compute it.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Track the swaps and the scalings',
    conclusion: 'Reduce to triangular form with row additions, which leave the determinant alone, and account for every swap and scaling along the way. The cost is about $n^3$.',
    root: { name: 'Row operations and the determinant', sub: '3 effects' },
    children: [
      { id: 'swap', name: '[Swap two rows](!/linear-algebra/determinants/properties)', items: [ { label: 'Effect', text: '$\\det$ changes sign' } ] },
      { id: 'scale', name: '[Scale a row by k](!/linear-algebra/determinants/properties)', items: [ { label: 'Effect', text: '$\\det$ is multiplied by $k$' } ] },
      { id: 'add', name: '[Add a multiple of a row](!/linear-algebra/determinants/properties)', items: [ { label: 'Effect', text: '$\\det$ unchanged' } ] },
    ],
  };

  return {
  props: {
    detRowOpTree,
    singularCases,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj8Table,
    obj10Table,
    summaryTable,
    schemas,
    seoData: {
      title: "Determinants: Formula, Properties & Applications | Learn Math Class",
      description: "Learn matrix determinants: 2×2 and 3×3 formulas, cofactor expansion, Sarrus rule, row operations, singular vs invertible matrices, geometric interpretation as volume and orientation, and applications.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/determinants",
      name: "Determinants"
    },
  }
}
   }
const figureTheme = { title: '#06357A', parentBg: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function DeterminantsPage({detRowOpTree, singularCases, 
  seoData,
  sectionsContent,
  introContent,
  obj8Table,
  obj10Table,
  summaryTable,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template F (collapse).
  const conceptIntro = {
    beats: [
      {
        id: 'area',
        lead: `One account is an area: the parallelogram spanned by the columns.`,
        content: `Take $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$ and draw its two columns as arrows from the origin, $(3, 2)$ and $(1, 5)$. Together they span a parallelogram. Its area can be found with nothing but a ruler: the surrounding $4 \\times 7$ box has area $28$, and the triangles and rectangles left over around the parallelogram add up to $15$, so the parallelogram has area $13$.`,
        visual: ciSvg('para'),
        caption: `The arrows $(3, 2)$ and $(1, 5)$ and the two copies that close the shape. The region between them has area $13$.`,
      },
      {
        id: 'formula',
        lead: `The other account is a short calculation on the four entries.`,
        content: `Multiply the two entries on the main diagonal, multiply the other two, and subtract: $ad - bc = 3 \\cdot 5 - 1 \\cdot 2 = 13$. No drawing, no geometry — four numbers and one subtraction. Section 2 takes this formula as its starting point.`,
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `Both accounts give the same number every time.`,
        content: [
          `Try a few pairs of columns both ways.`,
          ciTable('bothTable'),
          `The rectangle is the easy check — its area is plainly $2 \\times 3$. The last pair is the telling one: both columns lie on the same line, the parallelogram collapses to nothing, and the formula gives $0$ as well.`,
        ],
      },
      {
        id: 'agree',
        lead: `They had to agree, because area and ad − bc react to the columns in the same way.`,
        content: [
          `Change the columns and watch both quantities.`,
          ciTable('rulesTable'),
          `Sliding a column along the other is a shear: the parallelogram leans but keeps its base and height, and $ad - bc$ is unchanged by the same move. Stretching a column stretches both by the same factor, and the unit square starts both at $1$. Any two quantities that behave this way under every change of columns are the same quantity — the two accounts were describing one number all along. (The formula can also come out negative; that sign records which way round the columns go, an orientation the plain area ignores.)`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [determinant](!/linear-algebra/definitions#determinant) of a square matrix $A$ is the single number $\\det(A)$ that both accounts describe: the signed factor by which $A$ scales area (volume, in higher dimensions), equal for a $2 \\times 2$ matrix to $ad - bc$.`,
        footer: `For $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 5 \\end{pmatrix}$, $\\det(A) = 13$.`,
      },
      {
        id: 'kind',
        lead: `A determinant is a number, and only square matrices have one.`,
        content: `It is one real number (or complex number, if the entries are complex) attached to the whole matrix. It is defined only for square matrices — a rectangular matrix has no determinant. The notation $|A|$ is widespread but potentially confusing, since the same vertical bars denote absolute value for real numbers and modulus for complex numbers. When there is any risk of ambiguity, $\\det(A)$ is preferred.`,
      },
      {
        id: 'caveat',
        lead: `Use the formula to compute and the area to understand.`,
        content: `The formula is what you calculate with, and for larger matrices it grows into the expansions of the sections below. The area is what explains the results. A zero determinant means the columns have collapsed onto a line (a plane, in 3D), so the map $x \\mapsto Ax$ squashes space flat and cannot be undone: $A$ is [invertible](!/linear-algebra/matrix/inverse) if and only if $\\det(A) \\neq 0$. The determinant also determines whether that map preserves or reverses orientation, and appears in explicit formulas for eigenvalues, matrix inverses, and solutions to linear systems.`,
      },
      {
        id: 'exit',
        content: `The next several sections develop the determinant starting from the smallest cases — the $2 \\times 2$ formula, the $3 \\times 3$ rule — and building toward cofactor expansion, the general definition, its properties, and its geometric meaning.`,
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
          <div key={'unit-twoByTwo'} dangerouslySetInnerHTML={{ __html: demoUnits.twoByTwo }} />,
          `Every larger determinant is assembled out of 2 × 2 pieces like this one.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
                  <div key={'unit-sarrus'} dangerouslySetInnerHTML={{ __html: demoUnits.sarrus }} />,
          `The general definition in the next section is what these six products are a special case of.`,
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
          <DiagramFrame
            key={'obj5-diagram'}
            id="determinant-singular-nonsingular-cases"
            title="Singular or nonsingular: what det(A) = 0 decides"
            source="/linear-algebra/determinants"
          >
            <CaseSplit data={singularCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
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
                  <div key={'unit-cofactor'} dangerouslySetInnerHTML={{ __html: demoUnits.cofactor }} />,
          `This is the definition that actually generalises, at the price of a cost that grows faster than almost anything else in the subject.`,
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
          <DiagramFrame
            key={'obj8-diagram'}
            id="determinant-row-operations-tree"
            title="How row operations change the determinant"
            source="/linear-algebra/determinants"
          >
            <TopDownTree data={detRowOpTree} />
          </DiagramFrame>,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
                  <div key={'unit-area'} dangerouslySetInnerHTML={{ __html: demoUnits.area }} />,
          `Every geometric use of the determinant — volume, orientation, change of variables — is this one fact applied in more dimensions.`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key={'obj10-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj10Table }} />,
        ]
    },
    // NEW capstone section: obj11
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
    {
        id:'pitfalls',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Determinants</h1>
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