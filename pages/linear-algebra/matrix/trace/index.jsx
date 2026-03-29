import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

 const keyWords = [
  'trace of a matrix',
  'matrix trace',
  'trace definition linear algebra',
  'trace eigenvalues sum',
  'cyclic property trace',
  'trace similarity invariant',
  'Frobenius inner product',
  'trace properties',
  'trace commutator',
  'trace special matrices',
  'trace matrix differentiation',
  'Frobenius norm',
  'trace determinant difference',
  'trace idempotent matrix',
  'matrix trace formula'
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
    title: `Definition`,
    content: `For an $n \\times n$ matrix $A$, the trace is the sum of the entries on the main diagonal:

$$\\text{tr}(A) = \\sum_{i=1}^{n} a_{ii} = a_{11} + a_{22} + \\cdots + a_{nn}$$

The trace is defined only for square matrices — a rectangular matrix has no trace.

For example, if $A = \\begin{pmatrix} 3 & 1 & 4 \\\\ 1 & 5 & 9 \\\\ 2 & 6 & 5 \\end{pmatrix}$, then $\\text{tr}(A) = 3 + 5 + 5 = 13$. The off-diagonal entries play no role.

The trace of the $n \\times n$ [identity matrix](!/linear-algebra/matrix/types) is $\\text{tr}(I_n) = n$, since there are $n$ ones on the diagonal. The trace of the zero matrix is $0$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Linearity`,
    content: `The trace is a linear function from the space of $n \\times n$ matrices to the real numbers. It satisfies additivity:

$$\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)$$

and scalar homogeneity:

$$\\text{tr}(cA) = c \\cdot \\text{tr}(A)$$

Combined, these say that $\\text{tr}(cA + dB) = c \\cdot \\text{tr}(A) + d \\cdot \\text{tr}(B)$ for any scalars $c, d$ and any $n \\times n$ matrices $A, B$. Both properties follow immediately from the definition — the sum of the diagonals of $A + B$ is the sum of the individual diagonal sums, and scaling every entry by $c$ scales each diagonal entry by $c$.

The transpose does not affect the trace: $\\text{tr}(A^T) = \\text{tr}(A)$, since transposition does not move the diagonal entries.

It is worth contrasting the trace with the [determinant](!/linear-algebra/determinants). The determinant is multiplicative ($\\det(AB) = \\det(A)\\det(B)$) but not additive ($\\det(A + B) \\neq \\det(A) + \\det(B)$ in general). The trace is additive but not multiplicative — $\\text{tr}(AB)$ generally has no relation to $\\text{tr}(A) \\cdot \\text{tr}(B)$. Each captures different structural information about the matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Trace of Special Matrices`,
    content: `For a [diagonal](!/linear-algebra/matrix/types) matrix $D = \\text{diag}(d_1, \\dots, d_n)$, the trace is simply $d_1 + d_2 + \\cdots + d_n$ — the entire matrix reduces to its diagonal, and the trace reads off everything. A scalar matrix $cI$ has trace $cn$.

A [skew-symmetric](!/linear-algebra/matrix/types) matrix has all diagonal entries equal to zero (since $a_{ii} = -a_{ii}$ forces $a_{ii} = 0$), so $\\text{tr}(A) = 0$ for every real skew-symmetric matrix.

An [idempotent](!/linear-algebra/matrix/types) matrix — one satisfying $A^2 = A$ — has a striking property: $\\text{tr}(A) = \\text{rank}(A)$. The eigenvalues of an idempotent matrix are restricted to $0$ and $1$, the trace counts the number of eigenvalues equal to $1$, and this count equals the dimension of the column space.

A [nilpotent](!/linear-algebra/matrix/types) matrix has all eigenvalues equal to zero, so $\\text{tr}(A) = 0$. More generally, $\\text{tr}(A^k) = 0$ for every positive integer $k$, since the eigenvalues of $A^k$ are the $k$-th powers of the eigenvalues of $A$, and $0^k = 0$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Cyclic Property`,
    content: `The most distinctive algebraic property of the trace is its invariance under cyclic permutations of a product. For any two matrices $A$ and $B$ where both products $AB$ and $BA$ are defined:

$$\\text{tr}(AB) = \\text{tr}(BA)$$

Note that $AB$ and $BA$ need not even have the same dimensions — if $A$ is $m \\times n$ and $B$ is $n \\times m$, then $AB$ is $m \\times m$ and $BA$ is $n \\times n$. The traces of these differently-sized matrices are nevertheless equal.

The proof is a direct computation. The $(i,i)$ entry of $AB$ is $\\sum_k a_{ik} b_{ki}$, so $\\text{tr}(AB) = \\sum_i \\sum_k a_{ik} b_{ki}$. The $(k,k)$ entry of $BA$ is $\\sum_i b_{ki} a_{ik}$, so $\\text{tr}(BA) = \\sum_k \\sum_i b_{ki} a_{ik}$. Both double sums range over the same index pairs and contain the same terms.

For three matrices, the cyclic property extends to

$$\\text{tr}(ABC) = \\text{tr}(BCA) = \\text{tr}(CAB)$$

Only cyclic reorderings are permitted. The rearrangement $\\text{tr}(ABC) = \\text{tr}(ACB)$ is false in general — swapping two adjacent factors is not a cyclic permutation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Trace and Eigenvalues`,
    content: `The trace of a matrix equals the sum of its [eigenvalues](!/linear-algebra/eigen), counted with algebraic multiplicity:

$$\\text{tr}(A) = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n$$

This identity connects a trivially computable quantity (add the diagonal entries) to eigenvalue information that ordinarily requires solving a degree-$n$ polynomial.

The proof comes from the characteristic polynomial $p(\\lambda) = \\det(A - \\lambda I)$. Expanding this determinant produces a polynomial of degree $n$ whose leading term is $(-\\lambda)^n$ and whose $\\lambda^{n-1}$ coefficient is $(-1)^{n-1} \\text{tr}(A)$. By Vieta's formulas, the sum of the roots of $p$ equals $\\text{tr}(A)$.

A companion identity links the determinant to the product of eigenvalues: $\\det(A) = \\lambda_1 \\lambda_2 \\cdots \\lambda_n$. Together, the trace and the determinant capture the two simplest symmetric functions of the eigenvalue spectrum — their sum and their product.

For a $3 \\times 3$ matrix with eigenvalues $2, -1, 4$, the trace is $5$ and the determinant is $-8$. Neither the trace nor the determinant individually determines the eigenvalues, but together they constrain them heavily. For a $2 \\times 2$ matrix, the trace and determinant determine the eigenvalues completely via the quadratic formula.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Trace and Similarity`,
    content: `Two matrices $A$ and $B$ are similar if $B = P^{-1}AP$ for some invertible matrix $P$. Similar matrices represent the same [linear transformation](!/linear-algebra/linear-transformations) in different coordinate systems — $P$ encodes the [change of basis](!/linear-algebra/linear-transformations/change-of-basis).

The trace is invariant under similarity:

$$\\text{tr}(P^{-1}AP) = \\text{tr}(A)$$

This follows in one step from the cyclic property: $\\text{tr}(P^{-1}AP) = \\text{tr}(APP^{-1}) = \\text{tr}(A)$.

Invariance under similarity means the trace is a property of the transformation itself, not of any particular matrix representation. No matter which basis is chosen, the trace comes out the same. The eigenvalues share this invariance (similar matrices have the same eigenvalues), and indeed $\\text{tr}(A) = \\sum \\lambda_i$ is an eigenvalue identity, so trace invariance and eigenvalue invariance are two sides of the same coin.

The determinant is also a similarity invariant: $\\det(P^{-1}AP) = \\det(A)$. Together with the trace, it forms the beginning of a sequence of similarity invariants — the coefficients of the characteristic polynomial — that collectively determine the eigenvalue structure of the transformation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Frobenius Inner Product`,
    content: `The trace provides a natural inner product on the space of $n \\times n$ matrices. For two matrices $A$ and $B$, the Frobenius inner product is

$$\\langle A, B \\rangle_F = \\text{tr}(A^T B) = \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} b_{ij}$$

This is the [dot product](!/linear-algebra/vectors/dot-product) of $A$ and $B$ viewed as vectors of $n^2$ entries. It is symmetric ($\\langle A, B \\rangle_F = \\langle B, A \\rangle_F$), linear in each argument, and positive definite ($\\langle A, A \\rangle_F > 0$ whenever $A \\neq O$).

The associated norm is the Frobenius norm:

$$\\|A\\|_F = \\sqrt{\\text{tr}(A^T A)} = \\sqrt{\\sum_{i,j} a_{ij}^2}$$

This measures the "total size" of a matrix as the square root of the sum of squares of all entries — the matrix analogue of the Euclidean length of a vector.

The Frobenius inner product turns the space of $n \\times n$ matrices into an inner product space, bringing geometric concepts — angles, orthogonality, [projections](!/linear-algebra/orthogonality/projections), distances — to bear on matrices themselves, not just on the vectors they act upon.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Trace of Commutators`,
    content: `The commutator of two $n \\times n$ matrices is the matrix

$$[A, B] = AB - BA$$

The commutator measures how far $A$ and $B$ are from commuting — it is zero if and only if $AB = BA$.

Regardless of what $A$ and $B$ are, the commutator always has trace zero:

$$\\text{tr}([A, B]) = \\text{tr}(AB - BA) = \\text{tr}(AB) - \\text{tr}(BA) = 0$$

The cancellation is a direct consequence of the cyclic property. This means the identity matrix $I$ can never be a commutator, since $\\text{tr}(I) = n \\neq 0$. In particular, there exist no $n \\times n$ matrices $A, B$ satisfying $AB - BA = I$ when working over the real or complex numbers with finite-dimensional matrices.

The converse does not hold in general: a traceless matrix is not necessarily a commutator, though in the space of $n \\times n$ matrices over a field, every traceless matrix can in fact be written as a commutator — a result that requires proof beyond the trace identity itself.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Trace Identities`,
    content: `Several identities involving the trace appear frequently enough to be worth collecting.

If $S$ is [symmetric](!/linear-algebra/matrix/types) and $K$ is [skew-symmetric](!/linear-algebra/matrix/types), then $\\text{tr}(SK) = 0$. The proof: $\\text{tr}(SK) = \\text{tr}((SK)^T) = \\text{tr}(K^T S^T) = \\text{tr}(-KS) = -\\text{tr}(KS) = -\\text{tr}(SK)$, where the last step uses the cyclic property. The only number equal to its own negative is zero.

The trace can be written as a sum of quadratic forms against the standard basis: $\\text{tr}(A) = \\sum_{i=1}^{n} \\mathbf{e}_i^T A \\mathbf{e}_i$. Each term $\\mathbf{e}_i^T A \\mathbf{e}_i = a_{ii}$ extracts one diagonal entry. This formula generalizes: for any [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) basis $\\{\\mathbf{q}_1, \\dots, \\mathbf{q}_n\\}$,

$$\\text{tr}(A) = \\sum_{i=1}^{n} \\mathbf{q}_i^T A \\mathbf{q}_i$$

The result is independent of which orthonormal basis is used — another manifestation of the trace's invariance under orthogonal change of coordinates.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Trace in Differentiation`,
    content: `Many objective functions in optimization and statistics are expressed as traces of matrix products, and computing their gradients requires differentiating with respect to a matrix variable.

The simplest case is the linear function $f(X) = \\text{tr}(AX)$, where $A$ is a fixed matrix and $X$ is the variable. The derivative with respect to $X$ is

$$\\frac{\\partial}{\\partial X} \\text{tr}(AX) = A^T$$

For the quadratic form $f(X) = \\text{tr}(X^T A X)$, the derivative is

$$\\frac{\\partial}{\\partial X} \\text{tr}(X^T A X) = (A + A^T)X$$

When $A$ is symmetric, this simplifies to $2AX$.

These formulas are the matrix analogues of the scalar rules $\\frac{d}{dx}(ax) = a$ and $\\frac{d}{dx}(ax^2) = 2ax$. They appear in deriving the normal equations for [least squares](!/linear-algebra/orthogonality/least-squares), in the gradient descent updates for matrix factorization problems, and in the analysis of covariance estimators. The trace's linearity and cyclic property make these derivatives clean and systematic — full matrix calculus extends these patterns to products of arbitrary length and composition.`,
    before: ``,
    after: ``,
    link: ``,
  },
}
  

const introContent = {
     id: "intro",
  title: `The Simplest Matrix Invariant`,
  content: `The trace of a square matrix is the sum of its diagonal entries — an operation so simple it barely seems worth naming. Yet this single number equals the sum of the eigenvalues, remains unchanged under similarity transformations, and turns up in inner products, commutator identities, and optimization gradients. Its simplicity is precisely what makes it powerful.`,
}


const faqQuestions = {
  obj1: {
    question: "What is the trace of a matrix?",
    answer: "The trace of an n × n matrix is the sum of its main diagonal entries: tr(A) = a₁₁ + a₂₂ + ⋯ + aₙₙ. It is defined only for square matrices. The trace of the identity matrix is n, and the trace of the zero matrix is 0.",
    sectionId: "1"
  },
  obj2: {
    question: "How is the trace related to eigenvalues?",
    answer: "The trace of a matrix equals the sum of all its eigenvalues, counted with algebraic multiplicity. This connects a trivially computable quantity — adding diagonal entries — to spectral information that normally requires solving the characteristic polynomial. The determinant similarly equals the product of the eigenvalues.",
    sectionId: "5"
  },
  obj3: {
    question: "What is the cyclic property of the trace?",
    answer: "The trace is invariant under cyclic permutations of a matrix product: tr(AB) = tr(BA), and more generally tr(ABC) = tr(BCA) = tr(CAB). Only cyclic reorderings are valid — swapping two adjacent factors changes the trace in general. This property also implies the trace is unchanged by similarity transformations.",
    sectionId: "4"
  },
  obj4: {
    question: "What is the Frobenius inner product?",
    answer: "The Frobenius inner product of two n × n matrices A and B is tr(AᵀB), which equals the sum of all entry-by-entry products. It is the dot product of the matrices viewed as vectors of n² entries. The associated Frobenius norm is the square root of tr(AᵀA).",
    sectionId: "7"
  },
  obj5: {
    question: "Why is the trace a similarity invariant?",
    answer: "For any invertible matrix P, tr(P⁻¹AP) = tr(A). This follows directly from the cyclic property. Since similar matrices represent the same linear transformation in different bases, the trace is a property of the transformation itself, independent of the chosen coordinate system.",
    sectionId: "6"
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
//       "name": "Trace of a Matrix"
//     },
//     "teaches": [
//       "Definition of the trace as the sum of diagonal entries",
//       "Linearity of the trace and contrast with the determinant",
//       "The cyclic property and its consequences",
//       "Trace as the sum of eigenvalues",
//       "Similarity invariance of the trace",
//       "The Frobenius inner product and trace in matrix calculus"
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
//         "name": "Trace of a Matrix",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix/trace"
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
    "name": "Trace of a Matrix",
    "description": "Learn the trace of a matrix — definition, cyclic property, connection to eigenvalues, similarity invariance, Frobenius inner product, commutator identities, and matrix differentiation.",
    "url": "https://www.learnmathclass.com/linear-algebra/matrix/trace",
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
      "name": "Trace of a Matrix"
    },
    "teaches": [
      "Definition of the trace as the sum of diagonal entries",
      "Linearity of the trace and contrast with the determinant",
      "The cyclic property and its consequences",
      "Trace as the sum of eigenvalues",
      "Similarity invariance of the trace",
      "The Frobenius inner product and trace in matrix calculus"
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
        "name": "Trace of a Matrix",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix/trace"
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
      title: "Trace of a Matrix: Properties & Identities | Learn Math Class",
      description: "Learn the trace of a matrix — definition, cyclic property, connection to eigenvalues, similarity invariance, Frobenius inner product, commutator identities, and matrix differentiation.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/matrix/trace",
      name: "Trace of a Matrix"
    },
  }
}
   }


export default function MatrixTracePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Trace of a Matrix</h1>
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
