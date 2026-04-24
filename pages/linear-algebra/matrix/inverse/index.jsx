import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


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
    title: `Definition of the Inverse`,
    content: `For a square matrix $A$ of order $n$, the inverse — if it exists — is the unique matrix $A^{-1}$ satisfying

$$AA^{-1} = A^{-1}A = I$$

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

$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

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

$A$ is invertible. The [determinant](!/linear-algebra/determinants) $\\det(A) \\neq 0$. The [rank](!/linear-algebra/matrix/rank) of $A$ equals $n$. The columns of $A$ are [linearly independent](!/linear-algebra/vector-spaces/linear-independence). The rows of $A$ are linearly independent. The columns of $A$ [span](!/linear-algebra/vector-spaces/span) $\\mathbb{R}^n$. The columns of $A$ form a [basis](!/linear-algebra/vector-spaces/basis) for $\\mathbb{R}^n$. The homogeneous system $Ax = \\mathbf{0}$ has only the trivial solution. The system $Ax = \\mathbf{b}$ has a unique solution for every $\\mathbf{b} \\in \\mathbb{R}^n$. The [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ is $\\{\\mathbf{0}\\}$. The [reduced row echelon form](!/linear-algebra/linear-systems/echelon-form) of $A$ is $I$. The matrix $A$ is a product of elementary matrices. Zero is not an [eigenvalue](!/linear-algebra/eigen) of $A$.

The power of this theorem is that proving any one condition automatically establishes all the others. Checking the determinant is often the fastest single test, but in large-scale computation, rank determination via row reduction is more practical.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing the Inverse by Row Reduction`,
    content: `The standard algorithm for computing the inverse of an $n \\times n$ matrix $A$ is to form the $n \\times 2n$ augmented matrix $[A \\mid I]$ and apply row operations to reduce the left half to the identity. If the reduction succeeds, the right half becomes $A^{-1}$:

$$[A \\mid I] \\xrightarrow{\\text{row ops}} [I \\mid A^{-1}]$$

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

$$A^{-1} = \\frac{1}{\\det(A)} \\operatorname{adj}(A)$$

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

Applying the inverse twice recovers the original: $(A^{-1})^{-1} = A$. The inverse of a product reverses the order: $(AB)^{-1} = B^{-1}A^{-1}$. This generalizes to any number of factors — $(A_1 A_2 \\cdots A_k)^{-1} = A_k^{-1} \\cdots A_2^{-1} A_1^{-1}$.

Transpose and inverse commute: $(A^T)^{-1} = (A^{-1})^T$. It does not matter whether you transpose first and then invert, or invert first and then transpose.

Scalars pass through as expected: $(cA)^{-1} = \\frac{1}{c} A^{-1}$ for any nonzero scalar $c$. Powers behave cleanly: $(A^k)^{-1} = (A^{-1})^k = A^{-k}$.

The determinant of the inverse is the reciprocal of the determinant: $\\det(A^{-1}) = 1/\\det(A)$. This follows immediately from the [multiplicative property](!/linear-algebra/determinants/properties) of the determinant: $\\det(A)\\det(A^{-1}) = \\det(AA^{-1}) = \\det(I) = 1$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Solving Systems with the Inverse`,
    content: `When $A$ is invertible, the system $Ax = \\mathbf{b}$ has the unique solution

$$\\mathbf{x} = A^{-1}\\mathbf{b}$$

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

A [diagonal](!/linear-algebra/matrix/types) matrix $D = \\text{diag}(d_1, \\dots, d_n)$ is invertible if and only if every diagonal entry is nonzero, and its inverse is $D^{-1} = \\text{diag}(1/d_1, \\dots, 1/d_n)$ — simply reciprocate each entry.

An [orthogonal](!/linear-algebra/matrix/types) matrix $Q$ satisfies $Q^{-1} = Q^T$. The inverse is the transpose, which costs nothing to compute — just reinterpret the matrix with rows and columns swapped.

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

The inverse of a product reverses order. Writing $(AB)^{-1} = A^{-1}B^{-1}$ is wrong; the correct identity is $(AB)^{-1} = B^{-1}A^{-1}$. The reversal is a consequence of non-commutativity: to undo the operation "first apply $B$, then apply $A$," you must first undo $A$, then undo $B$.

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


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": seoData.name,
//     "description": seoData.description,
//     "url": "https://www.learnmathclass.com" + seoData.url,
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
//       "name": "Inverse of a Matrix"
//     },
//     "teaches": [
//       "Definition and uniqueness of the matrix inverse",
//       "The 2×2 inverse formula with worked examples",
//       "The invertible matrix theorem and equivalent conditions",
//       "Computing inverses by row reduction and adjugate formula",
//       "Properties of the inverse including product reversal",
//       "When to use the inverse versus direct system solving"
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
//         "name": "Inverse of a Matrix",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix/inverse"
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


export default function MatrixInversePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {   
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Inverse of a Matrix</h1>
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
