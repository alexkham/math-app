import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'

import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "Cholesky decomposition",
  "Cholesky factorization",
  "LL^T factorization",
  "symmetric positive definite matrix",
  "Cholesky algorithm",
  "positive definiteness test",
  "Cholesky vs LU",
  "LDL^T decomposition",
  "Cholesky solve linear system",
  "matrix square root",
  "covariance matrix Cholesky",
  "pivoted Cholesky",
  "Cholesky computational cost",
  "lower triangular factorization"
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
    title: `What Cholesky Decomposition Is`,
    content: `The Cholesky decomposition writes a [symmetric](!/linear-algebra/matrix/types) positive definite [matrix](!/linear-algebra/matrix) $A$ as

$$A = LL^T$$

where $L$ is lower [triangular](!/linear-algebra/matrix/types) with strictly positive diagonal entries. The matrix $L$ is the Cholesky factor — the matrix "square root" of $A$ in the sense that $A$ is reconstructed by multiplying $L$ by its own [transpose](!/linear-algebra/matrix/operations).

The factorization is unique: for a given symmetric positive definite $A$, there is exactly one lower triangular $L$ with positive diagonal satisfying $A = LL^T$. The convention can also be written $A = R^TR$ with $R = L^T$ upper triangular — the choice between lower and upper is a matter of convention.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Existence: Symmetric Positive Definite Matrices`,
    content: `The Cholesky factorization exists if and only if $A$ is symmetric and positive definite. Symmetry means $A = A^T$. Positive definiteness means $\\mathbf{x}^TA\\mathbf{x} > 0$ for every nonzero vector $\\mathbf{x}$.

Several equivalent conditions characterize positive definiteness: all [eigenvalues](!/linear-algebra/eigen) of $A$ are strictly positive; all leading principal minors (the [determinants](!/linear-algebra/determinants) of the upper-left $k \\times k$ submatrices) are positive; all pivots in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) (without pivoting) are positive.

If either symmetry or positive definiteness fails, the Cholesky algorithm breaks down. A non-symmetric matrix has no $LL^T$ form. A symmetric matrix that is positive semi-definite (some eigenvalue is zero) produces a zero on the diagonal of $L$. An indefinite matrix (eigenvalues of both signs) produces a negative number under the square root, halting the algorithm.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Algorithm`,
    content: `The Cholesky factor $L$ is computed column by column, from left to right.

For column $j$, the diagonal entry is

$$l_{jj} = \\sqrt{a_{jj} - \\sum_{k=1}^{j-1} l_{jk}^2}$$

and the sub-diagonal entries (for $i > j$) are

$$l_{ij} = \\frac{1}{l_{jj}}\\left(a_{ij} - \\sum_{k=1}^{j-1} l_{ik}l_{jk}\\right)$$

The square root in the diagonal formula is always real and positive because positive definiteness guarantees that the expression under the root is strictly positive at every step.

## Worked Example

For $A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix}$:

$l_{11} = \\sqrt{4} = 2$. $l_{21} = 2/2 = 1$. $l_{31} = -2/2 = -1$.

$l_{22} = \\sqrt{5 - 1^2} = \\sqrt{4} = 2$. $l_{32} = (1 - (-1)(1))/2 = 2/2 = 1$.

$l_{33} = \\sqrt{6 - (-1)^2 - 1^2} = \\sqrt{4} = 2$.

$$L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 2 & 0 \\\\ -1 & 1 & 2 \\end{pmatrix}$$

Verification: $LL^T = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 5 & 1 \\\\ -2 & 1 & 6 \\end{pmatrix} = A$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Solving Systems with Cholesky`,
    content: `Given $A = LL^T$, the [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ is solved in two steps:

Forward substitution: solve $L\\mathbf{y} = \\mathbf{b}$ for $\\mathbf{y}$. Cost: $O(n^2)$.

Back substitution: solve $L^T\\mathbf{x} = \\mathbf{y}$ for $\\mathbf{x}$. Cost: $O(n^2)$.

The structure is identical to [LU](!/linear-algebra/decompositions/lower-upper), but only one triangular factor needs to be stored. The other is its transpose, which costs nothing extra — the same array of numbers is read in reverse order.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Computational Cost`,
    content: `The Cholesky factorization requires roughly $\\frac{1}{3}n^3$ arithmetic operations — exactly half the cost of [LU](!/linear-algebra/decompositions/lower-upper) factorization ($\\frac{2}{3}n^3$). The saving comes from symmetry: the lower triangle of $A$ determines the upper triangle ($a_{ij} = a_{ji}$), so only half the entries need processing.

Each triangular solve costs $O(n^2)$. For a single system, the total is $\\frac{1}{3}n^3 + O(n^2)$. For $k$ systems sharing the same coefficient matrix, the cost is $\\frac{1}{3}n^3 + 2kn^2$.

For large symmetric positive definite systems, Cholesky is the fastest direct solver available. It is roughly twice as fast as LU and requires roughly half the storage (only the lower triangle of $L$).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `No Pivoting Needed`,
    content: `Unlike LU, the Cholesky algorithm never requires row swaps. Positive definiteness guarantees that the quantity under the square root is strictly positive at every step — no zero or negative pivots can occur.

This makes the algorithm simpler (no permutation matrix to track), more stable (no near-zero pivots to amplify errors), and more predictable (the algorithm either runs to completion or breaks down, with no ambiguity).

If the algorithm encounters a non-positive value under the square root, the matrix is not positive definite. The breakdown happens at the first index $j$ where the leading $j \\times j$ principal submatrix fails to be positive definite. This makes Cholesky an efficient positive definiteness test: attempt the factorization and check whether it succeeds.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Cholesky as a Positive Definiteness Test`,
    content: `The Cholesky algorithm tests positive definiteness as a side effect of factoring. If $A = LL^T$ completes with all diagonal entries of $L$ strictly positive, $A$ is positive definite. If the algorithm breaks down at any step, $A$ is not positive definite.

This is often more practical than computing all [eigenvalues](!/linear-algebra/eigen) (also $O(n^3)$ but with a larger constant) or checking all leading principal minors (which requires $n$ [determinant](!/linear-algebra/determinants) computations).

The test is binary: the factorization either succeeds or fails. When it succeeds, $L$ is available for immediate use in system solving. When it fails, the index at which it breaks indicates which leading submatrix is the first to lose positive definiteness.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Where Cholesky Appears`,
    content: `Symmetric positive definite matrices appear throughout applied mathematics, and Cholesky is the default solver for all of them.

The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ produce a symmetric positive definite matrix $A^TA$ (when $A$ has full column [rank](!/linear-algebra/matrix/rank)). Cholesky on $A^TA$ solves least squares, though [QR](!/linear-algebra/decompositions/qr) is preferred for numerical stability.

Covariance matrices in statistics are symmetric positive semi-definite (positive definite when no variable is a linear combination of the others). Cholesky is used to sample from multivariate normal distributions: if $\\Sigma = LL^T$, then $L\\mathbf{z}$ (with $\\mathbf{z}$ standard normal) has distribution $\\mathcal{N}(\\mathbf{0}, \\Sigma)$.

Stiffness matrices in finite element analysis are symmetric positive definite. Newton's method in optimization solves $H\\mathbf{d} = -\\nabla f$ where $H$ (the Hessian) is positive definite at a strict local minimum. In both cases, Cholesky is the standard solver.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Cholesky and LU: The Relationship`,
    content: `For a symmetric positive definite matrix, [LU](!/linear-algebra/decompositions/lower-upper) factorization without pivoting always succeeds and produces $A = L_U D L_U^T$, where $L_U$ is unit lower triangular and $D$ is diagonal with positive entries. This is the $LDL^T$ decomposition.

The Cholesky factor is $L_{\\text{Chol}} = L_U D^{1/2}$ — the unit lower triangular factor with $\\sqrt{D}$ absorbed into it. Equivalently, $A = (L_U D^{1/2})(L_U D^{1/2})^T = LL^T$.

Cholesky is the symmetric-positive-definite specialization of LU. It exploits $A = A^T$ to halve the work and the storage, and it exploits positive definiteness to eliminate the need for pivoting. The $LDL^T$ variant avoids square roots entirely (computing $D$ and $L_U$ separately) and is sometimes preferred when the square roots are expensive or when the matrix is only positive semi-definite.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `The Semi-Definite and Rank-Deficient Case`,
    content: `A symmetric positive semi-definite matrix ($\\mathbf{x}^TA\\mathbf{x} \\geq 0$ with equality for some nonzero $\\mathbf{x}$) has at least one zero eigenvalue. The standard Cholesky factorization breaks down when it encounters the corresponding zero diagonal entry.

Pivoted Cholesky handles this case: $PAP^T = LL^T$ with a [permutation](!/linear-algebra/matrix/types) matrix $P$ and $L$ possibly having some zero diagonal entries. The permutation reorders the rows and columns to push the rank deficiency to the end.

In practice, numerical near-singularity — eigenvalues very close to zero but not exactly zero — is more common than exact singularity. A condition-number-based threshold determines which eigenvalues are treated as zero. Adding a small regularization $\\epsilon I$ to $A$ (making it $A + \\epsilon I$, which is positive definite for any $\\epsilon > 0$) is a common remedy that restores the standard Cholesky factorization at the cost of a controlled perturbation.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `The Square Root of a Symmetric Positive Definite Matrix`,
  content: `The Cholesky decomposition factors a symmetric positive definite matrix as A = LLᵀ, where L is lower triangular with positive diagonal entries. It exploits symmetry to achieve half the cost of LU, requires no pivoting, and doubles as a positive definiteness test. It is the fastest direct solver for the class of matrices that appears most often in optimization, statistics, and simulation.`,
}


const faqQuestions = {
  obj1: {
    question: "What is the Cholesky decomposition?",
    answer: "The Cholesky decomposition writes a symmetric positive definite matrix A as A = LLᵀ, where L is lower triangular with strictly positive diagonal entries. It is the unique matrix square root in this form and is the fastest direct solver for symmetric positive definite systems.",
    sectionId: "1"
  },
  obj2: {
    question: "When does the Cholesky decomposition exist?",
    answer: "The Cholesky factorization exists if and only if the matrix is symmetric and positive definite — meaning xᵀAx > 0 for every nonzero vector x. Equivalently, all eigenvalues must be strictly positive. If the matrix is only positive semi-definite or indefinite, the standard algorithm breaks down.",
    sectionId: "2"
  },
  obj3: {
    question: "How is Cholesky different from LU decomposition?",
    answer: "Cholesky exploits symmetry and positive definiteness to achieve half the cost of LU (n³/3 vs 2n³/3 operations), requires no pivoting, and stores only one triangular factor since the other is its transpose. Cholesky is the symmetric-positive-definite specialization of LU.",
    sectionId: "9"
  },
  obj4: {
    question: "Why does Cholesky not require pivoting?",
    answer: "Positive definiteness guarantees that every quantity under the square root during the algorithm is strictly positive. No zero or negative pivots can occur, so row swaps are never needed. If the algorithm encounters a non-positive value, the matrix is not positive definite.",
    sectionId: "6"
  },
  obj5: {
    question: "Where is Cholesky decomposition used?",
    answer: "Cholesky appears in solving normal equations for least squares, sampling from multivariate normal distributions using covariance matrices, finite element stiffness matrices, and Newton's method in optimization. It is the default solver whenever the matrix is symmetric positive definite.",
    sectionId: "8"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Cholesky Decomposition",
    "description": "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
    "url": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky",
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
      "name": "Cholesky Decomposition"
    },
    "teaches": [
      "Cholesky factorization A = LLᵀ",
      "Existence conditions: symmetric positive definite",
      "Column-by-column Cholesky algorithm",
      "Forward and back substitution for system solving",
      "Cholesky as a positive definiteness test",
      "Relationship to LU and LDLᵀ decompositions",
      "Applications in statistics, optimization, and simulation"
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
        "name": "Cholesky Decomposition",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions/cholesky"
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
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Cholesky Decomposition: Algorithm & Uses | Learn Math Class",
      description: "Cholesky decomposition A = LLᵀ for symmetric positive definite matrices: algorithm, worked example, system solving, computational cost, positive definiteness test, and applications.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/decompositions/cholesky",
      name: "Cholesky Decomposition"
    },
  }
}
   }
export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cholesky Decomposition</h1>
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
