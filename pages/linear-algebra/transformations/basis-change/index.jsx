import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "change of basis",
  "change of basis matrix",
  "similar matrices",
  "similarity transformation",
  "P inverse AP",
  "diagonalization basis change",
  "coordinate transformation",
  "orthogonal similarity",
  "Jordan normal form",
  "eigenvector basis",
  "similarity invariants",
  "change of basis example",
  "basis change linear algebra",
  "matrix representation basis"
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

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }
const sectionsContent = {
  obj1: {
    title: `The Problem`,
    content: `A linear transformation $T: V \\to V$ is a fixed geometric object — it sends each vector to a definite image regardless of how coordinates are assigned. But the [matrix](!/linear-algebra/transformations/matrix-representation) that represents $T$ depends on the choice of [basis](!/linear-algebra/vector-spaces). Different bases assign different coordinates to the same vectors, and the matrix that converts input coordinates to output coordinates changes accordingly.

This raises a natural question: if $T$ has matrix $A$ in one basis and matrix $A'$ in another, how are $A$ and $A'$ related? The answer is the similarity relation $A' = P^{-1}AP$, where $P$ is the change-of-basis matrix. Understanding this relation is the key to choosing bases strategically — picking the basis that makes the matrix as simple as possible.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Change-of-Basis Matrix`,
    content: `If $\\mathcal{B}$ and $\\mathcal{C}$ are two bases for $V$, the change-of-basis matrix $P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ converts $\\mathcal{B}$-coordinates to $\\mathcal{C}$-coordinates:

$$[\\mathbf{v}]_\\mathcal{C} = P_{\\mathcal{C} \\leftarrow \\mathcal{B}} \\, [\\mathbf{v}]_\\mathcal{B}$$

Column $j$ of $P$ is the $\\mathcal{C}$-coordinate vector of the $j$-th basis vector of $\\mathcal{B}$. The reverse conversion uses the [inverse](!/linear-algebra/matrix/inverse): $P_{\\mathcal{B} \\leftarrow \\mathcal{C}} = P^{-1}$.

## Worked Example

In $\\mathbb{R}^2$, let $\\mathcal{B} = \\{(1, 1), (1, -1)\\}$ and let $\\mathcal{C}$ be the standard basis. The $\\mathcal{C}$-coordinates of the $\\mathcal{B}$-basis vectors are just their components: $(1, 1)$ and $(1, -1)$. So

$$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$$

To find the $\\mathcal{B}$-coordinates of $\\mathbf{v} = (5, 1)$: solve $P\\mathbf{c} = (5, 1)$. Using $P^{-1} = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix}$, we get $\\mathbf{c} = (3, 2)$. So $\\mathbf{v} = 3(1, 1) + 2(1, -1)$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Similarity Relation`,
    content: `If $T: V \\to V$ has matrix $A$ in basis $\\mathcal{B}$ and matrix $A'$ in basis $\\mathcal{C}$, then

$$A' = P^{-1}AP$$

where $P = P_{\\mathcal{C} \\leftarrow \\mathcal{B}}$ is the change-of-basis matrix from $\\mathcal{B}$ to $\\mathcal{C}$.

The derivation is direct. For any vector $\\mathbf{v}$, the transformation in $\\mathcal{B}$-coordinates reads $[T(\\mathbf{v})]_\\mathcal{B} = A[\\mathbf{v}]_\\mathcal{B}$. Converting to $\\mathcal{C}$-coordinates: $[T(\\mathbf{v})]_\\mathcal{C} = P^{-1}[T(\\mathbf{v})]_\\mathcal{B} = P^{-1}A[\\mathbf{v}]_\\mathcal{B} = P^{-1}AP[\\mathbf{v}]_\\mathcal{C}$. Since this holds for every $\\mathbf{v}$, the matrix of $T$ in basis $\\mathcal{C}$ is $P^{-1}AP$.

Two matrices related by $A' = P^{-1}AP$ for some invertible $P$ are called similar. Similarity is an equivalence relation: every matrix is similar to itself ($P = I$), similarity is symmetric ($A' = P^{-1}AP$ implies $A = PA'P^{-1}$), and it is transitive.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Properties Preserved by Similarity`,
    content: `Similar matrices represent the same transformation, so they share every property that is intrinsic to the transformation rather than to a particular coordinate system.

The [determinant](!/linear-algebra/determinants) is preserved: $\\det(P^{-1}AP) = \\det(P^{-1})\\det(A)\\det(P) = \\det(A)$.

The [trace](!/linear-algebra/matrix/trace) is preserved: $\\text{tr}(P^{-1}AP) = \\text{tr}(APP^{-1}) = \\text{tr}(A)$ by the cyclic property.

The [eigenvalues](!/linear-algebra/eigenvalues-vectors) are preserved: $\\det(P^{-1}AP - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$, so the characteristic polynomial — and therefore all eigenvalues with their multiplicities — is the same.

The [rank](!/linear-algebra/matrix/rank) is preserved: multiplying by invertible matrices cannot change the rank.

Individual matrix entries, symmetry, and sparsity are generally not preserved. A [symmetric](!/linear-algebra/matrix/types) matrix $A$ can become non-symmetric under $P^{-1}AP$ if $P$ is not [orthogonal](!/linear-algebra/matrix/types).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Diagonalization as a Change of Basis`,
    content: `If $T$ has $n$ [linearly independent](!/linear-algebra/vector-spaces/linear-independence) eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ with eigenvalues $\\lambda_1, \\dots, \\lambda_n$, use them as the basis $\\mathcal{B}$. In this eigenvector basis, $T$ acts by scaling each basis vector:

$$T(\\mathbf{v}_i) = \\lambda_i \\mathbf{v}_i$$

The matrix of $T$ in this basis is diagonal: $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$.

The change-of-basis matrix $P$ has the eigenvectors as columns: $P = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$. The similarity relation gives $A = PDP^{-1}$, or equivalently $D = P^{-1}AP$.

[Diagonalization](!/linear-algebra/eigenvalues-vectors/diagonalization) is the most powerful application of basis change. It reduces matrix powers to diagonal powers: $A^k = PD^kP^{-1} = P\\,\\text{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)\\,P^{-1}$. It simplifies differential equations, recurrence relations, and any computation involving repeated application of the same transformation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `When Diagonalization Fails`,
    content: `Not every matrix is diagonalizable. A transformation may not have $n$ linearly independent eigenvectors — this happens when the geometric multiplicity of some eigenvalue is strictly less than its algebraic multiplicity.

For example, $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ has eigenvalue $\\lambda = 2$ with algebraic multiplicity $2$, but the eigenspace is one-dimensional (spanned by $(1, 0)$). There is no basis of eigenvectors, so $A$ cannot be diagonalized.

In such cases, the best achievable form under similarity is the Jordan normal form: a block-diagonal matrix where each block is an upper triangular matrix with a single eigenvalue on the diagonal and ones on the superdiagonal. The Jordan form is unique up to ordering of blocks and is the canonical representative of the similarity class. Its full development belongs to advanced linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Orthogonal Similarity`,
    content: `When the change-of-basis matrix $P$ is [orthogonal](!/linear-algebra/matrix/types) ($P^{-1} = P^T$), the similarity relation becomes $A' = P^TAP$. This is called orthogonal similarity.

Orthogonal similarity preserves more than ordinary similarity. If $A$ is [symmetric](!/linear-algebra/matrix/types), then $P^TAP$ is also symmetric — a property that ordinary similarity does not guarantee.

The Spectral Theorem states that every real symmetric matrix is orthogonally similar to a diagonal matrix. The eigenvectors of a symmetric matrix can be chosen [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets), and the columns of $P$ form an orthonormal basis. This is a stronger conclusion than ordinary diagonalizability — the diagonalizing basis is not just independent but orthonormal, which simplifies [projections](!/linear-algebra/orthogonality/projections), [least squares](!/linear-algebra/orthogonality/least-squares), and numerical computation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Worked Example: Full Basis Change`,
    content: `Let $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$. Find a diagonalization $A = PDP^{-1}$.

The characteristic polynomial is $\\det(A - \\lambda I) = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$. Eigenvalues: $\\lambda_1 = 2$, $\\lambda_2 = 5$.

For $\\lambda_1 = 2$: $(A - 2I)\\mathbf{v} = \\mathbf{0}$ gives $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$, so $\\mathbf{v}_1 = (1, -2)$.

For $\\lambda_2 = 5$: $(A - 5I)\\mathbf{v} = \\mathbf{0}$ gives $\\begin{pmatrix} -1 & 1 \\\\ 2 & -2 \\end{pmatrix}\\mathbf{v} = \\mathbf{0}$, so $\\mathbf{v}_2 = (1, 1)$.

$$P = \\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$$

Verification: $P^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix}$, and $PDP^{-1} = \\begin{pmatrix} 1 & 1 \\\\ -2 & 1 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}\\frac{1}{3}\\begin{pmatrix} 1 & -1 \\\\ 2 & 1 \\end{pmatrix} = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix} = A$.

Application: $A^{10} = PD^{10}P^{-1} = P\\begin{pmatrix} 2^{10} & 0 \\\\ 0 & 5^{10} \\end{pmatrix}P^{-1} = P\\begin{pmatrix} 1024 & 0 \\\\ 0 & 9765625 \\end{pmatrix}P^{-1}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Why Basis Choice Matters`,
    content: `The standard basis is the default, but it is rarely the best choice for a given problem.

An [eigenvector](!/linear-algebra/eigenvalues-vectors) basis diagonalizes the matrix, reducing powers and exponentials to operations on diagonal entries. A system of differential equations $\\mathbf{x}' = A\\mathbf{x}$ decouples into independent scalar equations when $A$ is diagonal.

An [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) basis simplifies [projections](!/linear-algebra/orthogonality/projections) and [least-squares](!/linear-algebra/orthogonality/least-squares) computations. Coordinates relative to an orthonormal basis are computed by dot products rather than by solving systems, and numerical errors are minimized because the change-of-basis matrix has condition number $1$.

A Jordan basis achieves the simplest possible form for non-diagonalizable matrices, isolating the defective eigenvalues into small blocks.

Choosing the right basis is often the key insight that converts a hard problem into an easy one. The transformation does not change — only its numerical description does — but the right description can make all the difference between a tractable computation and an intractable one.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `Same Transformation, Different Matrix`,
  content: `The same linear transformation has different matrix representations in different bases. Changing the basis changes the numbers but not the map itself. The relationship between two matrix representations of the same transformation is similarity — and choosing the right basis is how difficult matrices become simple ones.`,
}

const faqQuestions = {
  obj1: {
    question: "What is a change-of-basis matrix?",
    answer: "The change-of-basis matrix P converts coordinates from one basis to another. Column j of P is the coordinate vector of the j-th basis vector of the source basis expressed in the target basis. The inverse P⁻¹ converts in the reverse direction.",
    sectionId: "2"
  },
  obj2: {
    question: "What does it mean for two matrices to be similar?",
    answer: "Two matrices A and A' are similar if A' = P⁻¹AP for some invertible matrix P. Similar matrices represent the same linear transformation in different bases. They share the same determinant, trace, eigenvalues, characteristic polynomial, and rank.",
    sectionId: "3"
  },
  obj3: {
    question: "What properties are preserved by similarity?",
    answer: "Similar matrices share every property intrinsic to the transformation: determinant, trace, eigenvalues with multiplicities, characteristic polynomial, and rank. Individual entries, symmetry, and sparsity are generally not preserved unless the change-of-basis matrix has special structure.",
    sectionId: "4"
  },
  obj4: {
    question: "How is diagonalization a change of basis?",
    answer: "Diagonalization uses eigenvectors as the new basis. In this basis, the transformation acts by scaling each basis vector by its eigenvalue, so the matrix becomes diagonal: D = P⁻¹AP where P has eigenvectors as columns. This reduces powers to A^k = PD^kP⁻¹.",
    sectionId: "5"
  },
  obj5: {
    question: "What is orthogonal similarity?",
    answer: "Orthogonal similarity uses an orthogonal change-of-basis matrix P (where P⁻¹ = Pᵀ), giving A' = PᵀAP. It preserves symmetry and is the basis of the spectral theorem: every real symmetric matrix is orthogonally similar to a diagonal matrix of its eigenvalues.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Change of Basis and Similarity",
    "description": "Change of basis in linear algebra: coordinate conversion, similar matrices, similarity invariants, diagonalization as basis change, orthogonal similarity, and Jordan normal form.",
    "url": "https://www.learnmathclass.com/linear-algebra/transformations/basis-change",
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
      "name": "Change of Basis"
    },
    "teaches": [
      "Change-of-basis matrix and coordinate conversion",
      "Similarity relation A' = P⁻¹AP",
      "Properties preserved by similarity",
      "Diagonalization as eigenvector basis change",
      "Non-diagonalizable matrices and Jordan form",
      "Orthogonal similarity and the spectral theorem",
      "Strategic basis choice for simplifying computations"
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
        "name": "Transformations",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Change of Basis",
        "item": "https://www.learnmathclass.com/linear-algebra/transformations/basis-change"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/transformations/basis-change",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Change of Basis & Similarity | Learn Math Class",
      description: "Change of basis in linear algebra: coordinate conversion, similar matrices, similarity invariants, diagonalization as basis change, orthogonal similarity, and Jordan normal form.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/transformations/basis-change",
      name: "Change of Basis and Similarity"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function BasisChangePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Change of Basis</h1>
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
