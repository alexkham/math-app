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
  "spectral decomposition",
  "spectral theorem",
  "symmetric matrix eigenvalues",
  "QDQ^T factorization",
  "orthogonal diagonalization",
  "quadratic forms classification",
  "principal component analysis PCA",
  "outer product decomposition",
  "real symmetric eigenvalues",
  "positive definite matrix",
  "eigenvector projection",
  "covariance matrix eigenvalues",
  "spectral decomposition vs SVD",
  "symmetric matrix factorization"
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
    title: `What the Spectral Decomposition Is`,
    content: `Every real [symmetric](!/linear-algebra/matrix/types) [matrix](!/linear-algebra/matrix) $A$ factors as

$$A = QDQ^T$$

where $Q$ is [orthogonal](!/linear-algebra/matrix/types) ($Q^TQ = QQ^T = I$) and $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$ is the diagonal matrix of [eigenvalues](!/linear-algebra/eigenvalues-vectors). The columns of $Q$ are orthonormal eigenvectors: $Q = [\\mathbf{q}_1 \\; \\mathbf{q}_2 \\; \\cdots \\; \\mathbf{q}_n]$ with $A\\mathbf{q}_i = \\lambda_i\\mathbf{q}_i$ and $\\mathbf{q}_i \\cdot \\mathbf{q}_j = \\delta_{ij}$.

This is the [diagonalization](!/linear-algebra/eigenvalues-vectors/diagonalization) $A = PDP^{-1}$ specialized to symmetric matrices, where the crucial bonus is that $P$ can be chosen orthogonal — so $P^{-1} = P^T$. The orthogonality of $Q$ is not a convenience; it is a structural guarantee that holds for every real symmetric matrix, regardless of eigenvalue multiplicities.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Spectral Theorem`,
    content: `The spectral theorem for real symmetric matrices states three facts.

All eigenvalues of a real symmetric matrix are real. No [complex](!/linear-algebra/eigenvalues-vectors/complex-eigen) eigenvalues can appear.

Eigenvectors corresponding to distinct eigenvalues are [orthogonal](!/linear-algebra/orthogonality). If $\\lambda_i \\neq \\lambda_j$, then $\\mathbf{q}_i \\cdot \\mathbf{q}_j = 0$ automatically — no [Gram-Schmidt](!/linear-algebra/orthogonality/gram-schmidt) is needed between different eigenspaces.

Every real symmetric matrix is orthogonally diagonalizable. There always exist $n$ orthonormal eigenvectors forming a [basis](!/linear-algebra/vector-spaces) for $\\mathbb{R}^n$, even when eigenvalues are repeated. For a repeated eigenvalue with geometric multiplicity $k$, the eigenspace is $k$-dimensional, and Gram-Schmidt within that eigenspace produces $k$ orthonormal eigenvectors.

Together these three facts guarantee that $A = QDQ^T$ exists for every real symmetric $A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Outer Product Form`,
    content: `Expanding $A = QDQ^T$ column by column produces the spectral decomposition in outer product form:

$$A = \\lambda_1 \\mathbf{q}_1\\mathbf{q}_1^T + \\lambda_2 \\mathbf{q}_2\\mathbf{q}_2^T + \\cdots + \\lambda_n \\mathbf{q}_n\\mathbf{q}_n^T$$

Each term $\\lambda_i \\mathbf{q}_i\\mathbf{q}_i^T$ is a rank-one matrix. The matrix $\\mathbf{q}_i\\mathbf{q}_i^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto the line spanned by $\\mathbf{q}_i$: it sends any vector $\\mathbf{x}$ to $(\\mathbf{q}_i \\cdot \\mathbf{x})\\mathbf{q}_i$. Multiplying by $\\lambda_i$ scales the projection by the eigenvalue.

The spectral decomposition says that $A$ acts by projecting onto each eigenvector direction independently, scaling each projection by the corresponding eigenvalue, and summing the results. There is no interaction between different eigenvector directions — the orthogonality of the $\\mathbf{q}_i$'s ensures complete decoupling.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing the Spectral Decomposition`,
    content: `The computation follows the standard eigenvalue workflow, with one additional step for repeated eigenvalues.

Find the eigenvalues by solving the [characteristic equation](!/linear-algebra/eigenvalues-vectors/characteristic-equation) $\\det(A - \\lambda I) = 0$. All roots are real.

For each eigenvalue $\\lambda_i$, find the eigenspace by solving $(A - \\lambda_i I)\\mathbf{v} = \\mathbf{0}$ via [row reduction](!/linear-algebra/linear-systems/gaussian-elimination).

If an eigenvalue has multiplicity greater than $1$, apply [Gram-Schmidt](!/linear-algebra/orthogonality/gram-schmidt) within its eigenspace to produce an orthonormal basis. Eigenvectors from different eigenspaces are already orthogonal — no cross-eigenspace orthogonalization is needed.

Assemble $Q$ (orthonormal eigenvectors as columns) and $D$ (eigenvalues on the diagonal in matching order).

## Worked Example

For $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$: eigenvalues are $\\lambda_1 = 4$, $\\lambda_2 = 2$. Eigenvectors: $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 1)^T$, $\\mathbf{q}_2 = \\frac{1}{\\sqrt{2}}(1, -1)^T$. Then $A = 4 \\cdot \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} + 2 \\cdot \\frac{1}{2}\\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix} + \\begin{pmatrix} 1 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Properties of the Factors`,
    content: `The orthogonality of $Q$ makes every operation on the spectral decomposition cheap and clean.

The [inverse](!/linear-algebra/matrix/inverse) is immediate: $A^{-1} = QD^{-1}Q^T = Q\\,\\text{diag}(1/\\lambda_1, \\dots, 1/\\lambda_n)\\,Q^T$, valid when all eigenvalues are nonzero.

Powers are diagonal: $A^k = QD^kQ^T = Q\\,\\text{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)\\,Q^T$.

The matrix exponential is: $e^{At} = Qe^{Dt}Q^T = Q\\,\\text{diag}(e^{\\lambda_1 t}, \\dots, e^{\\lambda_n t})\\,Q^T$.

The [trace](!/linear-algebra/matrix/trace) is $\\text{tr}(A) = \\lambda_1 + \\cdots + \\lambda_n$. The [determinant](!/linear-algebra/determinants) is $\\det(A) = \\lambda_1 \\cdots \\lambda_n$. The [rank](!/linear-algebra/matrix/rank) is the number of nonzero eigenvalues.

Every property of $A$ reduces to a property of the diagonal $D$, mediated by the orthogonal rotation $Q$. This is the computational power of diagonalization — and for symmetric matrices, the orthogonality of $Q$ ensures numerical stability as well.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Quadratic Forms`,
    content: `A quadratic form $f(\\mathbf{x}) = \\mathbf{x}^TA\\mathbf{x}$ with $A$ symmetric can be diagonalized by the change of variables $\\mathbf{x} = Q\\mathbf{y}$:

$$f = \\mathbf{y}^TQ^TAQ\\mathbf{y} = \\mathbf{y}^TD\\mathbf{y} = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\cdots + \\lambda_n y_n^2$$

In the eigenvector coordinate system, the quadratic form decouples into a sum of independent squared terms. The eigenvectors define the principal axes of the quadratic surface (ellipsoid, hyperboloid, etc.), and the eigenvalues determine the curvature along each axis.

Positive definite ($f > 0$ for $\\mathbf{x} \\neq \\mathbf{0}$) means all $\\lambda_i > 0$ — the surface is an ellipsoid. Positive semi-definite ($f \\geq 0$) means all $\\lambda_i \\geq 0$. Indefinite (eigenvalues of both signs) means the surface is a hyperboloid — $f$ takes both positive and negative values.

Classification of quadratic forms reduces entirely to checking the signs of the eigenvalues.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Principal Component Analysis`,
    content: `The spectral decomposition of a covariance matrix is the mathematical core of principal component analysis (PCA).

The covariance matrix $\\Sigma$ of a dataset is symmetric positive semi-definite. Its spectral decomposition $\\Sigma = QDQ^T$ identifies the eigenvectors $\\mathbf{q}_i$ as the principal component directions — the orthogonal axes along which the data varies most — and the eigenvalues $\\lambda_i$ as the variance captured by each direction.

The first principal component $\\mathbf{q}_1$ (corresponding to the largest eigenvalue $\\lambda_1$) is the direction of maximum variance. The second $\\mathbf{q}_2$ is the direction of maximum variance orthogonal to $\\mathbf{q}_1$, and so on.

Dimensionality reduction follows: projecting the data onto the top $k$ eigenvectors (those with the $k$ largest eigenvalues) captures as much variance as possible in $k$ dimensions. The discarded directions have small eigenvalues and contribute little information. This is PCA — the spectral decomposition applied to the covariance matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Spectral Decomposition vs. General Eigendecomposition`,
    content: `The general eigendecomposition writes a diagonalizable matrix as $A = PDP^{-1}$ with $P$ [invertible](!/linear-algebra/matrix/inverse) but not necessarily orthogonal. The spectral decomposition writes a symmetric matrix as $A = QDQ^T$ with $Q$ orthogonal.

The orthogonality of $Q$ provides three advantages. Inversion is free: $Q^{-1} = Q^T$, no computation needed. Multiplication preserves norms: $\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|$, so numerical errors are not amplified. Projections are [orthogonal](!/linear-algebra/orthogonality/projections): the rank-one terms $\\mathbf{q}_i\\mathbf{q}_i^T$ are orthogonal projection matrices, making the outer product form geometrically transparent.

The spectral decomposition exists only for [symmetric](!/linear-algebra/matrix/types) matrices (real case) or Hermitian matrices (complex case). For non-symmetric matrices, the eigendecomposition $PDP^{-1}$ may exist (when the matrix is diagonalizable) but $P$ is not orthogonal, and the computational and geometric advantages are lost.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Spectral Decomposition and SVD`,
    content: `For a symmetric positive semi-definite matrix $A$ (all eigenvalues $\\geq 0$), the spectral decomposition and the [singular value decomposition](!/linear-algebra/decompositions/svd) coincide. The singular values are the eigenvalues, and $U = V = Q$: $A = QDQ^T = Q\\Sigma Q^T$.

For a general symmetric matrix with negative eigenvalues, the relationship requires a sign adjustment. The singular values are the absolute values $|\\lambda_i|$, and the signs are absorbed into $U$ or $V$. If $\\lambda_i < 0$, the corresponding column of $U$ is negated relative to the corresponding column of $V$.

The [SVD](!/linear-algebra/decompositions/svd) generalizes the spectral decomposition to non-symmetric and non-square matrices. Every property that the spectral decomposition provides for symmetric matrices — rank, pseudoinverse, best low-rank approximation, condition number — the SVD provides for arbitrary matrices. The spectral decomposition is the special case where symmetry allows $U$ and $V$ to coincide.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


 const introContent = {
  title: `A Symmetric Matrix as a Sum of Projections`,
  content: `The spectral decomposition factors a real symmetric matrix as QDQᵀ — an orthogonal matrix of eigenvectors times a diagonal matrix of eigenvalues times the transpose. In outer product form, this becomes a sum of rank-one projections weighted by eigenvalues. The decomposition is the factorization form of the spectral theorem and the foundation of principal component analysis, quadratic form classification, and positive definiteness testing.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the spectral decomposition?",
    answer: "The spectral decomposition factors a real symmetric matrix A as A = QDQᵀ, where Q is orthogonal (columns are orthonormal eigenvectors) and D is diagonal (eigenvalues on the diagonal). In outer product form, A is a sum of rank-one projections weighted by eigenvalues.",
    sectionId: "1"
  },
  obj2: {
    question: "What does the spectral theorem guarantee?",
    answer: "The spectral theorem guarantees three things for real symmetric matrices: all eigenvalues are real, eigenvectors from distinct eigenvalues are automatically orthogonal, and the matrix is always orthogonally diagonalizable — even when eigenvalues are repeated.",
    sectionId: "2"
  },
  obj3: {
    question: "How does the spectral decomposition classify quadratic forms?",
    answer: "A quadratic form xᵀAx diagonalizes to λ₁y₁² + λ₂y₂² + ⋯ + λₙyₙ² in eigenvector coordinates. All positive eigenvalues mean positive definite (ellipsoid), all non-negative mean positive semi-definite, and mixed signs mean indefinite (hyperboloid). Classification reduces to checking eigenvalue signs.",
    sectionId: "6"
  },
  obj4: {
    question: "How is the spectral decomposition used in PCA?",
    answer: "PCA applies the spectral decomposition to a covariance matrix. The eigenvectors are the principal component directions (axes of maximum variance), and the eigenvalues measure the variance along each direction. Projecting data onto the top k eigenvectors achieves optimal dimensionality reduction.",
    sectionId: "7"
  },
  obj5: {
    question: "What is the difference between spectral decomposition and SVD?",
    answer: "The spectral decomposition A = QDQᵀ applies only to symmetric matrices and uses a single orthogonal matrix Q. The SVD A = UΣVᵀ applies to any matrix and uses two orthogonal matrices. For symmetric positive semi-definite matrices, the two coincide with U = V = Q and singular values equal to eigenvalues.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Spectral Decomposition",
    "description": "Spectral decomposition A = QDQᵀ for symmetric matrices: spectral theorem, outer product form, quadratic forms, PCA, positive definiteness, and relationship to SVD.",
    "url": "https://www.learnmathclass.com/linear-algebra/decompositions/spectral",
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
      "name": "Spectral Decomposition"
    },
    "teaches": [
      "Spectral decomposition A = QDQᵀ",
      "The spectral theorem for real symmetric matrices",
      "Outer product form as sum of rank-one projections",
      "Powers, inverse, and exponential via spectral decomposition",
      "Quadratic form classification by eigenvalue signs",
      "Principal component analysis from covariance eigendecomposition",
      "Relationship between spectral decomposition and SVD"
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
        "name": "Decompositions",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Spectral Decomposition",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions/spectral"
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

  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Title | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/linear-algebra/decompositions/spectral",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Spectral Decomposition: QDQᵀ & PCA | Learn Math Class",
      description: "Spectral decomposition A = QDQᵀ for symmetric matrices: spectral theorem, outer product form, quadratic forms, PCA, positive definiteness, and relationship to SVD.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/decompositions/spectral",
      name: "Spectral Decomposition"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {


export default function SpectralDecompositionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Page Title</h1>
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
