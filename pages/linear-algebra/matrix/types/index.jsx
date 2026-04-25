import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords = [
  'types of matrices',
  'symmetric matrix',
  'diagonal matrix',
  'orthogonal matrix',
  'identity matrix',
  'triangular matrix',
  'nilpotent matrix',
  'idempotent matrix',
  'skew-symmetric matrix',
  'permutation matrix',
  'involutory matrix',
  'singular matrix',
  'square matrix types',
  'matrix classification linear algebra',
  'special matrices properties'
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
    title: `Square Matrices`,
    content: `A matrix with equal numbers of rows and columns — $n$ rows and $n$ columns — is called square, and is said to have order $n$. Square matrices occupy a privileged position in linear algebra because several fundamental concepts are defined exclusively for them.

Only square matrices have a [determinant](!/linear-algebra/determinants). Only square matrices can be [invertible](!/linear-algebra/matrix/inverse). Only square matrices have [eigenvalues](!/linear-algebra/eigen) and a [trace](!/linear-algebra/matrix/trace). Powers $A^k$ are defined only when $A$ is square, since the product $A \\cdot A$ requires the number of columns to equal the number of rows. Every type discussed on this page is a square matrix with additional structure imposed on top.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Identity Matrix`,
    content: `The $n \\times n$ identity matrix $I_n$ has ones on the main diagonal and zeros elsewhere:

$$I_3 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$

It is the multiplicative identity: $AI = IA = A$ for any matrix $A$ with compatible dimensions. As a [linear transformation](!/linear-algebra/transformations), $I$ is the map that sends every vector to itself.

The identity is simultaneously diagonal, symmetric, orthogonal, upper triangular, and lower triangular. Its determinant is $1$, its inverse is itself, every eigenvalue is $1$, its trace equals $n$, and $I^k = I$ for every non-negative integer $k$. The subscript $n$ is dropped when the size is clear from context.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Diagonal Matrices`,
    content: `A diagonal matrix has nonzero entries only on the main diagonal:

$$D = \\text{diag}(d_1, d_2, \\dots, d_n) = \\begin{pmatrix} d_1 & 0 & \\cdots & 0 \\\\ 0 & d_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & d_n \\end{pmatrix}$$

Diagonal matrices are the easiest matrices to work with. Their arithmetic reduces to operations on the diagonal entries alone:

$$\\text{diag}(d_1, \\dots, d_n) \\cdot \\text{diag}(e_1, \\dots, e_n) = \\text{diag}(d_1 e_1, \\dots, d_n e_n)$$

$$D^k = \\text{diag}(d_1^k, \\dots, d_n^k)$$

$$D^{-1} = \\text{diag}(1/d_1, \\dots, 1/d_n)$$

The inverse exists if and only if every diagonal entry is nonzero. The determinant is $\\det(D) = d_1 d_2 \\cdots d_n$, and the eigenvalues are the diagonal entries themselves. As a transformation, a diagonal matrix scales each coordinate axis independently — stretching along axes where $|d_i| > 1$ and compressing where $|d_i| < 1$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Triangular Matrices`,
    content: `An upper triangular matrix has all entries below the main diagonal equal to zero:

$$U = \\begin{pmatrix} u_{11} & u_{12} & u_{13} \\\\ 0 & u_{22} & u_{23} \\\\ 0 & 0 & u_{33} \\end{pmatrix}$$

A lower triangular matrix has all entries above the main diagonal equal to zero:

$$L = \\begin{pmatrix} l_{11} & 0 & 0 \\\\ l_{21} & l_{22} & 0 \\\\ l_{31} & l_{32} & l_{33} \\end{pmatrix}$$

Triangular matrices share several convenient properties with diagonal matrices. The [determinant](!/linear-algebra/determinants) is the product of the diagonal entries. The eigenvalues are the diagonal entries. The product of two upper triangular matrices is upper triangular, and the same holds for lower triangular matrices. The inverse of an invertible upper triangular matrix is also upper triangular.

These properties make triangular matrices the natural endpoint of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination). Row reduction converts a general matrix into upper triangular form, and the LU [decomposition](!/linear-algebra/decompositions/lower-upper) factors a matrix into lower and upper triangular components, reducing system-solving to two simple back-substitution passes.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Symmetric Matrices`,
    content: `A square matrix is symmetric if it equals its own [transpose](!/linear-algebra/matrix/operations): $A = A^T$, meaning $a_{ij} = a_{ji}$ for every pair of indices. The matrix is determined by its entries on and above the diagonal — everything below is a mirror image.

Symmetric matrices arise constantly in practice. Covariance matrices, Hessians in optimization, adjacency matrices of undirected graphs, and distance matrices are all symmetric. Any product of the form $A^T A$ or $AA^T$ is symmetric regardless of the shape of $A$, since $(A^T A)^T = A^T (A^T)^T = A^T A$.

The spectral properties of real symmetric matrices are exceptionally clean. Every eigenvalue is real — no complex eigenvalues can appear. Eigenvectors corresponding to distinct eigenvalues are automatically orthogonal. And the spectral theorem guarantees that every real symmetric matrix can be diagonalized by an orthogonal matrix: $A = Q D Q^T$ where $Q$ is orthogonal and $D$ is diagonal. This is a much stronger conclusion than ordinary diagonalizability, which requires only an invertible change-of-basis matrix.

A symmetric matrix is called positive definite if $\\mathbf{x}^T A \\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$. Positive definiteness is equivalent to all eigenvalues being strictly positive, and it guarantees the existence of the [Cholesky decomposition](!/linear-algebra/decompositions/cholesky) $A = LL^T$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Skew-Symmetric Matrices`,
    content: `A square matrix is skew-symmetric if $A^T = -A$, meaning $a_{ij} = -a_{ji}$ for all $i, j$. Setting $i = j$ forces $a_{ii} = -a_{ii}$, so every diagonal entry must be zero.

Every square matrix admits a unique decomposition into a symmetric part and a skew-symmetric part:

$$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$$

The first term is symmetric, the second is skew-symmetric, and this splitting is unique.

The eigenvalues of a real skew-symmetric matrix are either zero or purely imaginary — they come in conjugate pairs $\\pm bi$ with real eigenvalues restricted to zero. For matrices of odd order, the determinant is always zero: $\\det(A) = \\det(A^T) = \\det(-A) = (-1)^n \\det(A)$, and when $n$ is odd, this forces $\\det(A) = 0$. For even order, the determinant can be nonzero.

In $\\mathbb{R}^3$, the [cross product](!/linear-algebra/vectors/cross-product) $\\mathbf{a} \\times \\mathbf{b}$ can be written as $[\\mathbf{a}]_\\times \\mathbf{b}$, where $[\\mathbf{a}]_\\times$ is the $3 \\times 3$ skew-symmetric matrix

$$[\\mathbf{a}]_\\times = \\begin{pmatrix} 0 & -a_3 & a_2 \\\\ a_3 & 0 & -a_1 \\\\ -a_2 & a_1 & 0 \\end{pmatrix}$$

This reformulates the cross product as a matrix-vector multiplication.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Orthogonal Matrices`,
    content: `A square matrix $Q$ is orthogonal if its transpose equals its inverse:

$$Q^T Q = QQ^T = I \\qquad \\text{equivalently,} \\quad Q^{-1} = Q^T$$

This means the columns of $Q$ form an [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) set: each column has unit length, and distinct columns are perpendicular. The same is true of the rows.

The determinant of an orthogonal matrix is $\\pm 1$, since $1 = \\det(I) = \\det(Q^T Q) = \\det(Q)^2$. When $\\det(Q) = +1$, the matrix is a rotation. When $\\det(Q) = -1$, it involves a reflection.

The defining geometric property is that orthogonal matrices preserve lengths: $\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$ for every vector $\\mathbf{x}$. They also preserve dot products ($Q\\mathbf{x} \\cdot Q\\mathbf{y} = \\mathbf{x} \\cdot \\mathbf{y}$) and therefore angles between vectors. A transformation that preserves all distances and angles is called an isometry, and the orthogonal matrices are precisely the linear isometries.

Common examples include rotation matrices in $\\mathbb{R}^2$ and $\\mathbb{R}^3$, reflection matrices across any line or plane through the origin, and permutation matrices that reorder coordinates. The inverse of an orthogonal matrix is its transpose — making it the cheapest matrix inverse to compute.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Nilpotent and Idempotent Matrices`,
    content: `A square matrix $A$ is nilpotent if some positive power of it equals the zero matrix: $A^k = O$ for some integer $k \\geq 1$. The smallest such $k$ is called the index of nilpotency. Every eigenvalue of a nilpotent matrix is zero, which forces both the determinant and the trace to vanish.

Nilpotent matrices have a useful algebraic consequence: the matrix $I - A$ is always invertible, with inverse given by the finite geometric series

$$(I - A)^{-1} = I + A + A^2 + \\cdots + A^{k-1}$$

The series terminates because $A^k = O$, so there is no convergence issue.

A square matrix $A$ is idempotent if $A^2 = A$ — applying the transformation twice is the same as applying it once. The eigenvalues of an idempotent matrix can only be $0$ or $1$, since $\\lambda^2 = \\lambda$ implies $\\lambda = 0$ or $\\lambda = 1$. A striking identity links the rank and the trace: $\\text{rank}(A) = \\text{tr}(A)$, because the trace counts the eigenvalues equal to $1$, which is the dimension of the image.

Geometrically, idempotent matrices are [projections](!/linear-algebra/orthogonality/projections). They project $\\mathbb{R}^n$ onto the column space of $A$ along the null space. If $A$ is also symmetric, the projection is orthogonal.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Involutory and Permutation Matrices`,
    content: `A square matrix is involutory if $A^2 = I$ — it is its own inverse. The eigenvalues of an involutory matrix must satisfy $\\lambda^2 = 1$, so they are restricted to $+1$ and $-1$. Reflections are the prototypical example: reflecting twice across the same line or plane returns every vector to its starting point.

The matrix $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ is involutory — it swaps the two coordinates and swapping twice restores the original. More generally, any matrix of the form $2P - I$, where $P$ is idempotent, is involutory.

A permutation matrix is a square matrix with exactly one entry equal to $1$ in each row and each column, and all other entries zero. Left-multiplying a matrix $A$ by a permutation matrix $P$ reorders the rows of $A$ according to the permutation. Right-multiplying reorders the columns.

Permutation matrices are orthogonal ($P^{-1} = P^T$), their determinant is $+1$ or $-1$ depending on whether the permutation is even or odd, and the product of two permutation matrices is another permutation matrix. They appear in the LU decomposition with partial pivoting, where row swaps are tracked by a permutation matrix: $PA = LU$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Singular and Nonsingular Matrices`,
    content: `The classification of a square matrix as singular or nonsingular is not a structural pattern like symmetry or triangularity — it is a behavioral property that depends on the values of the entries.

A singular matrix has [determinant](!/linear-algebra/determinants) zero. Its columns are [linearly dependent](!/linear-algebra/vector-spaces/linear-independence), its [rank](!/linear-algebra/matrix/rank) is less than $n$, and the system $Ax = \\mathbf{b}$ fails to have a unique solution for every $\\mathbf{b}$. As a transformation, a singular matrix collapses at least one dimension — its image is a proper subspace of $\\mathbb{R}^n$.

A nonsingular (invertible) matrix has nonzero determinant, full rank, and linearly independent columns and rows. The system $Ax = \\mathbf{b}$ has exactly one solution for every right-hand side, and the [inverse](!/linear-algebra/matrix/inverse) $A^{-1}$ exists.

Any matrix type can be singular or nonsingular depending on its entries. A diagonal matrix is singular if any diagonal entry is zero. A triangular matrix is singular if any diagonal entry is zero. An orthogonal matrix is never singular, since its determinant is $\\pm 1$. A nilpotent matrix (other than the zero matrix of order $1$) is always singular, since all its eigenvalues are zero.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary of Matrix Types`,
    content: `The defining property of each type, together with its most important consequence, can be collected for quick reference.

The identity matrix ($I_{ij} = \\delta_{ij}$) is the multiplicative identity. Diagonal matrices (off-diagonal entries all zero) have trivially simple powers, products, and inverses. Upper and lower triangular matrices (zeros below or above the diagonal) have eigenvalues visible on the diagonal. Symmetric matrices ($A = A^T$) have real eigenvalues and orthogonal eigenvectors. Skew-symmetric matrices ($A = -A^T$) have zero diagonal and purely imaginary eigenvalues. Orthogonal matrices ($Q^T = Q^{-1}$) preserve lengths and angles. Nilpotent matrices ($A^k = O$) have all eigenvalues zero. Idempotent matrices ($A^2 = A$) are projections with $\\text{rank} = \\text{tr}$. Involutory matrices ($A^2 = I$) are their own inverse. Permutation matrices (one $1$ per row and column) reorder coordinates and are always orthogonal.

These categories are not mutually exclusive. The identity matrix is diagonal, symmetric, orthogonal, triangular, idempotent, and involutory simultaneously. A $1 \\times 1$ zero matrix is diagonal, symmetric, skew-symmetric, triangular, nilpotent, and singular. Recognizing which types a given matrix belongs to is often the fastest route to understanding its behavior.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
    id: "intro",
  title: `Special Forms and Their Properties`,
  content: `Certain matrices have structural patterns — zeros in prescribed positions, symmetry across the diagonal, orthonormal columns — that guarantee specific algebraic and geometric behaviors. Recognizing these patterns often transforms a difficult computation into a straightforward one and determines which theorems apply.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a symmetric matrix?",
    answer: "A symmetric matrix equals its own transpose, meaning the entry in row i, column j is the same as the entry in row j, column i. Every eigenvalue of a real symmetric matrix is real, and its eigenvectors can be chosen to be mutually orthogonal. Symmetric matrices can always be diagonalized by an orthogonal matrix.",
    sectionId: "5"
  },
  obj2: {
    question: "What is a diagonal matrix?",
    answer: "A diagonal matrix has nonzero entries only on the main diagonal, with all off-diagonal entries equal to zero. Its powers, products, and inverse reduce to operations on the diagonal entries alone. The determinant is the product of the diagonal entries, and the eigenvalues are the diagonal entries themselves.",
    sectionId: "3"
  },
  obj3: {
    question: "What makes a matrix orthogonal?",
    answer: "A square matrix is orthogonal when its transpose equals its inverse, meaning its columns form an orthonormal set. Orthogonal matrices preserve lengths and angles, making them the algebraic representation of rotations and reflections. Their determinant is always +1 or −1.",
    sectionId: "7"
  },
  obj4: {
    question: "What is the difference between singular and nonsingular matrices?",
    answer: "A singular matrix has determinant zero, linearly dependent columns, and rank less than its order — the system Ax = b does not have a unique solution for every b. A nonsingular matrix has nonzero determinant, full rank, and a unique inverse, guaranteeing exactly one solution for every right-hand side.",
    sectionId: "10"
  },
  obj5: {
    question: "What are nilpotent and idempotent matrices?",
    answer: "A nilpotent matrix satisfies Aᵏ = O for some positive integer k, meaning all its eigenvalues are zero. An idempotent matrix satisfies A² = A, so applying the transformation twice is the same as applying it once. Idempotent matrices act as projections, and their rank always equals their trace.",
    sectionId: "8"
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
//       "name": "Types of Matrices"
//     },
//     "teaches": [
//       "Diagonal, identity, and triangular matrix structures",
//       "Symmetric and skew-symmetric matrix properties",
//       "Orthogonal matrices and length preservation",
//       "Nilpotent and idempotent matrices as algebraic types",
//       "Involutory and permutation matrices",
//       "Singular versus nonsingular classification"
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
//         "name": "Types of Matrices",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix/types"
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
    "name": "Types of Matrices",
    "description": "Learn about matrix types — diagonal, symmetric, orthogonal, triangular, nilpotent, idempotent, and permutation matrices. Defining properties, eigenvalue behavior, and key theorems.",
    "url": "https://www.learnmathclass.com/linear-algebra/matrix/types",
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
      "name": "Types of Matrices"
    },
    "teaches": [
      "Diagonal, identity, and triangular matrix structures",
      "Symmetric and skew-symmetric matrix properties",
      "Orthogonal matrices and length preservation",
      "Nilpotent and idempotent matrices as algebraic types",
      "Involutory and permutation matrices",
      "Singular versus nonsingular classification"
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
        "name": "Types of Matrices",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix/types"
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
      title: "Types of Matrices: Properties & Examples | Learn Math Class",
      description: "Learn about matrix types — diagonal, symmetric, orthogonal, triangular, nilpotent, idempotent, and permutation matrices. Defining properties, eigenvalue behavior, and key theorems.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/matrix/types",
      name: "Types of Matrices"
    },
  }
}
   
}


export default function MatrixTypesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Types of Matrices</h1>
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
