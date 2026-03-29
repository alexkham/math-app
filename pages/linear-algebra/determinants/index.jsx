import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../pages.css'
import Head from 'next/head'


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

  const sectionsContent = {
  obj1: {
    title: `The Determinant as a Scalar Assignment`,
    content: `Every square matrix $A$ of size $n \\times n$ has a single real number (or complex number, if the entries are complex) associated with it, written $\\det(A)$ or $|A|$. This number is called the determinant. It is defined only for square matrices — a rectangular matrix has no determinant.

The notation $|A|$ is widespread but potentially confusing, since the same vertical bars denote absolute value for real numbers and modulus for complex numbers. When there is any risk of ambiguity, $\\det(A)$ is preferred.

The determinant encodes a remarkable amount of structural information. Its most fundamental role is as an invertibility test: $A$ is [invertible](!/linear-algebra/matrices/inverse) if and only if $\\det(A) \\neq 0$. But it also measures how the linear map $x \\mapsto Ax$ distorts volume, determines whether that map preserves or reverses orientation, and appears in explicit formulas for eigenvalues, matrix inverses, and solutions to linear systems. The next several sections develop the determinant starting from the smallest cases and building toward the general definition.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The 2×2 Formula`,
    content: `For a $2 \\times 2$ matrix

$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$

the determinant is

$$\\det(A) = ad - bc$$

One way to see where this formula comes from is to solve the system $Ax = \\mathbf{v}$ for a general right-hand side. Applying elimination, the solution involves dividing by $ad - bc$ at every step. When $ad - bc = 0$, the system either has no solution or infinitely many, and the matrix cannot be inverted. When $ad - bc \\neq 0$, there is a unique solution for every $\\mathbf{v}$, and the inverse exists.

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

$$A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix}$$

the determinant is computed by expanding along the first row:

$$\\det(A) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

Each first-row entry multiplies the $2 \\times 2$ determinant of the submatrix that remains after deleting that entry's row and column. The signs alternate: $+, -, +$.

## The Sarrus Mnemonic

A shortcut for the $3 \\times 3$ case is the rule of Sarrus. Write the matrix and copy its first two columns to the right:

$$\\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix} \\begin{matrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{matrix}$$

Sum the three products along the downward diagonals, then subtract the three products along the upward diagonals. This gives the same result as the first-row expansion. The Sarrus rule works only for $3 \\times 3$ matrices — there is no analogous diagonal trick for $4 \\times 4$ or larger.

## Worked Example

For $A = \\begin{pmatrix} 2 & 3 & 1 \\\\ 0 & -1 & 4 \\\\ 5 & 2 & 3 \\end{pmatrix}$, expanding along the first row:

$$\\det(A) = 2[(-1)(3) - (4)(2)] - 3[(0)(3) - (4)(5)] + 1[(0)(2) - (-1)(5)]$$

$$= 2(-3 - 8) - 3(0 - 20) + 1(0 + 5) = 2(-11) - 3(-20) + 5 = -22 + 60 + 5 = 43$$

The same result follows from the Sarrus rule: downward diagonals give $2(-1)(3) + 3(4)(5) + 1(0)(2) = -6 + 60 + 0 = 54$; upward diagonals give $1(-1)(5) + 2(4)(2) + 3(0)(3) = -5 + 16 + 0 = 11$; the determinant is $54 - 11 = 43$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The General n×n Determinant`,
    content: `The pattern from the $3 \\times 3$ case extends to any dimension. For an $n \\times n$ matrix, expand along the first row:

$$\\det(A) = \\sum_{j=1}^{n} (-1)^{1+j} \\, a_{1j} \\, M_{1j}$$

where $M_{1j}$ is the determinant of the $(n-1) \\times (n-1)$ submatrix obtained by deleting row $1$ and column $j$. This is a recursive definition: each $n \\times n$ determinant reduces to $n$ determinants of size $(n-1) \\times (n-1)$, each of which reduces further, until reaching the base case of $1 \\times 1$ matrices where $\\det(a) = a$.

A crucial fact is that the expansion need not use the first row. Expanding along any row or any column gives the same result. The signed sub-determinants $(-1)^{i+j} M_{ij}$ are called [cofactors](!/linear-algebra/determinants/cofactors), and the freedom to choose the expansion axis is what makes the formula practical: a row or column with many zeros dramatically reduces the number of terms.

The recursive nature of this definition means the computational cost grows factorially. An $n \\times n$ determinant via cofactor expansion requires on the order of $n!$ arithmetic operations. For $n = 5$ that is $120$ operations; for $n = 10$ it is over $3.6$ million. This explosion is what motivates the row-reduction approach, which accomplishes the same task in $O(n^3)$ operations by exploiting how [row operations](!/linear-algebra/determinants/properties) affect the determinant.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Singular and Nonsingular Matrices`,
    content: `The value $\\det(A) = 0$ marks a sharp dividing line. A square matrix with zero determinant is called singular; a square matrix with nonzero determinant is called nonsingular or invertible.

When $\\det(A) = 0$, the columns of $A$ are [linearly dependent](!/linear-algebra/vector-spaces/linear-independence) — at least one column can be written as a linear combination of the others. The homogeneous system $Ax = \\mathbf{0}$ has nontrivial solutions, the rank of $A$ is strictly less than $n$, and the matrix maps $\\mathbb{R}^n$ onto a lower-dimensional subspace. Geometrically, the transformation collapses at least one dimension, flattening regions of positive volume down to zero volume.

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

$$A = \\begin{pmatrix} 1 & 0 & 2 & -1 \\\\ 3 & 0 & 0 & 5 \\\\ 2 & 1 & 4 & -3 \\\\ 1 & 0 & 5 & 0 \\end{pmatrix}$$

Column $2$ has three zeros and a single $1$ in position $(3,2)$, making it the best expansion axis. Expanding along column $2$:

$$\\det(A) = (-1)^{3+2} \\cdot 1 \\cdot M_{32}$$

where $M_{32}$ is the $3 \\times 3$ determinant obtained by deleting row $3$ and column $2$:

$$M_{32} = \\det\\begin{pmatrix} 1 & 2 & -1 \\\\ 3 & 0 & 5 \\\\ 1 & 5 & 0 \\end{pmatrix}$$

Expanding this along its first row:

$$M_{32} = 1(0 \\cdot 0 - 5 \\cdot 5) - 2(3 \\cdot 0 - 5 \\cdot 1) + (-1)(3 \\cdot 5 - 0 \\cdot 1)$$

$$= 1(-25) - 2(-5) + (-1)(15) = -25 + 10 - 15 = -30$$

So $\\det(A) = (-1)^{5} \\cdot 1 \\cdot (-30) = (-1)(-30) = 30$.

The choice of column $2$ reduced the problem from four $3 \\times 3$ determinants down to one. This illustrates why scanning for zeros before expanding is the first step in any hand computation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Expanding by Minors and Cofactors`,
    content: `The sub-determinants appearing in cofactor expansion have their own terminology. The $(i,j)$ minor $M_{ij}$ is the determinant of the submatrix formed by deleting row $i$ and column $j$ from $A$. The $(i,j)$ cofactor is the signed version:

$$C_{ij} = (-1)^{i+j} M_{ij}$$

The sign factor $(-1)^{i+j}$ follows a checkerboard pattern starting with $+$ at position $(1,1)$:

$$\\begin{pmatrix} + & - & + & - & \\cdots \\\\ - & + & - & + & \\cdots \\\\ + & - & + & - & \\cdots \\\\ \\vdots & & & & \\ddots \\end{pmatrix}$$

Using this notation, the Laplace expansion along row $i$ takes the compact form

$$\\det(A) = \\sum_{j=1}^{n} a_{ij} \\, C_{ij}$$

and the expansion along column $j$ is

$$\\det(A) = \\sum_{i=1}^{n} a_{ij} \\, C_{ij}$$

Both give the same result regardless of which row or column is chosen. Collecting all cofactors into a matrix and transposing produces the [adjugate](!/linear-algebra/determinants/cofactors), which leads to an explicit formula for the matrix inverse. The full development of minors, cofactors, the adjugate, and the structural results they enable is on the [cofactors](!/linear-algebra/determinants/cofactors) page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `How Row Operations Affect the Determinant`,
    content: `The three elementary row operations interact with the determinant in simple, predictable ways. Swapping two rows multiplies the determinant by $-1$. Multiplying a row by a nonzero scalar $k$ multiplies the determinant by $k$. Adding a scalar multiple of one row to a different row leaves the determinant unchanged.

These three rules turn [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) into a determinant-computing algorithm. Reduce $A$ to upper triangular form using row operations, tracking every swap and every scaling. The determinant of the resulting triangular matrix is the product of its diagonal entries. Adjusting for the tracked sign flips and scale factors gives $\\det(A)$.

This approach requires on the order of $n^3$ arithmetic operations — a dramatic improvement over the $n!$ cost of cofactor expansion. For any matrix larger than $4 \\times 4$, row reduction is the practical method.

## A Quick Illustration

Starting from $A = \\begin{pmatrix} 2 & 4 \\\\ 3 & 7 \\end{pmatrix}$, subtract $\\frac{3}{2}$ times row $1$ from row $2$ (this does not change the determinant) to get $\\begin{pmatrix} 2 & 4 \\\\ 0 & 1 \\end{pmatrix}$. The product of the diagonal is $2 \\cdot 1 = 2$, which matches $\\det(A) = 2 \\cdot 7 - 4 \\cdot 3 = 2$.

The complete set of algebraic [properties](!/linear-algebra/determinants/properties) — including the multiplicative rule $\\det(AB) = \\det(A)\\det(B)$, transpose invariance, and the full invertibility equivalence — is developed on the properties page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Area, Volume, and Orientation`,
    content: `The determinant has a direct geometric meaning: it measures how a matrix, viewed as a [linear transformation](!/linear-algebra/transformations), distorts size and orientation.

In two dimensions, $|\\det(A)|$ equals the area of the parallelogram spanned by the columns of $A$. In three dimensions, $|\\det(A)|$ equals the volume of the parallelepiped spanned by the three column vectors, which also equals the scalar triple product $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$. In $n$ dimensions, $|\\det(A)|$ is the factor by which the map $x \\mapsto Ax$ scales $n$-dimensional volumes.

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

Each of these formulas is developed with full worked examples on the [applications](!/linear-algebra/determinants/applications) page.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }

const introContent = {
    id: "intro",
  title: `A Single Number from a Square Matrix`,
  content: `Every square matrix maps to a single scalar called its determinant. This value captures whether the matrix is invertible, how it scales geometric regions, and whether it preserves or reverses orientation. The determinant appears throughout linear algebra — in eigenvalue equations, system-solving formulas, and volume computations — making it one of the most information-dense quantities attached to a matrix.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the determinant of a matrix?",
    answer: "The determinant is a single scalar assigned to every square matrix. It determines invertibility (det ≠ 0 means invertible), measures how the matrix scales volume, and indicates whether orientation is preserved or reversed. Only square matrices have determinants.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the formula for a 2×2 determinant?",
    answer: "For A = [[a,b],[c,d]], det(A) = ad - bc. This equals the signed area of the parallelogram spanned by the column vectors. Zero means the columns are parallel; positive means counterclockwise arrangement; negative means clockwise.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you calculate a 3×3 determinant?",
    answer: "Expand along the first row: det(A) = a₁₁(a₂₂a₃₃ - a₂₃a₃₂) - a₁₂(a₂₁a₃₃ - a₂₃a₃₁) + a₁₃(a₂₁a₃₂ - a₂₂a₃₁). Alternatively, use the Sarrus rule: sum downward diagonals minus upward diagonals. Sarrus only works for 3×3.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you compute an n×n determinant?",
    answer: "Use cofactor expansion: det(A) = Σ(-1)^(1+j) a₁ⱼ M₁ⱼ where M₁ⱼ is the (n-1)×(n-1) minor. This is recursive and costs O(n!) operations. For large matrices, row reduction to triangular form (O(n³)) is practical.",
    sectionId: "4"
  },
  obj5: {
    question: "What does det(A) = 0 mean?",
    answer: "A zero determinant means the matrix is singular (not invertible). The columns are linearly dependent, the system Ax = 0 has nontrivial solutions, the rank is less than n, and the transformation collapses at least one dimension to zero volume.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the best way to compute determinants by hand?",
    answer: "For 2×2, use ad - bc. For 3×3, use first-row expansion or Sarrus rule. For 4×4+, use cofactor expansion along a row/column with the most zeros to minimize sub-determinants. Scan for zeros before expanding.",
    sectionId: "6"
  },
  obj7: {
    question: "What are minors and cofactors?",
    answer: "The (i,j) minor Mᵢⱼ is the determinant after deleting row i and column j. The cofactor Cᵢⱼ = (-1)^(i+j)Mᵢⱼ includes the checkerboard sign. Expansion along any row or column using cofactors gives the same determinant.",
    sectionId: "7"
  },
  obj8: {
    question: "How do row operations affect the determinant?",
    answer: "Swapping rows multiplies det by -1. Scaling a row by k multiplies det by k. Adding a multiple of one row to another leaves det unchanged. These rules enable O(n³) computation via row reduction to triangular form.",
    sectionId: "8"
  },
  obj9: {
    question: "What is the geometric meaning of the determinant?",
    answer: "|det(A)| equals the scaling factor for n-dimensional volume: area in 2D, volume in 3D. The sign indicates orientation: positive preserves (counterclockwise/right-handed), negative reverses. Zero means collapse to lower dimension.",
    sectionId: "9"
  },
  obj10: {
    question: "What formulas use the determinant?",
    answer: "Cramer's rule: xᵢ = det(Aᵢ)/det(A). Inverse: A⁻¹ = adj(A)/det(A). Cross product via 3×3 determinant with unit vectors. Characteristic polynomial det(A - λI) for eigenvalues. Wronskian for function independence.",
    sectionId: "10"
  }
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
      "Determinant-based formulas"
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
    faqQuestions,
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
export default function DeterminantsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
 <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Determinants</h1>
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
