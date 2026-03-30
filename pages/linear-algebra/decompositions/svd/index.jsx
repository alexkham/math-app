import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "singular value decomposition",
  "SVD",
  "singular values",
  "left right singular vectors",
  "low-rank approximation",
  "pseudoinverse SVD",
  "Moore-Penrose pseudoinverse",
  "Eckart-Young theorem",
  "matrix rank SVD",
  "condition number singular values",
  "four fundamental subspaces SVD",
  "compact SVD thin SVD",
  "SVD image compression",
  "operator norm Frobenius norm",
  "UΣVᵀ factorization"
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
    title: `What the SVD Is`,
    content: `Every $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ — any shape, any [rank](!/linear-algebra/matrix/rank) — factors as

$$A = U\\Sigma V^T$$

$U$ is $m \\times m$ [orthogonal](!/linear-algebra/matrix/types): its columns are the left singular vectors. $V$ is $n \\times n$ orthogonal: its columns are the right singular vectors. $\\Sigma$ is $m \\times n$ with non-negative entries $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_{\\min(m,n)} \\geq 0$ on the diagonal and zeros elsewhere. These are the singular values.

The SVD exists without any restriction. The matrix need not be square, need not be [invertible](!/linear-algebra/matrix/inverse), need not be [symmetric](!/linear-algebra/matrix/types), and need not have any special structure. It is the most general factorization in linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Geometric Interpretation`,
    content: `Every [linear transformation](!/linear-algebra/transformations) $\\mathbf{x} \\mapsto A\\mathbf{x}$ decomposes into three geometric steps:

$V^T$ rotates (or reflects) the input space, aligning the input with the "natural axes" of the transformation — the directions along which $A$ stretches most and least.

$\\Sigma$ scales each axis independently by the corresponding singular value. Axes with $\\sigma_i = 0$ are annihilated — those directions are collapsed to zero.

$U$ rotates (or reflects) the scaled result into the output space.

The singular values measure the stretching in each orthogonal direction. $\\sigma_1$ is the maximum stretching: $\\sigma_1 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The smallest nonzero singular value $\\sigma_r$ is the minimum stretching on the [row space](!/linear-algebra/vector-spaces/fundamental-subspaces). The ratio $\\sigma_1/\\sigma_r$ is the condition number — it measures how distorted the transformation is.

Even the most complex-looking matrix is geometrically just two rotations sandwiching a coordinate-axis scaling.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Singular Values`,
    content: `The singular values of $A$ are the square roots of the [eigenvalues](!/linear-algebra/eigen) of $A^TA$ (or equivalently $AA^T$):

$$\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$$

Since $A^TA$ is symmetric positive semi-definite, its eigenvalues are all $\\geq 0$, so the singular values are real and non-negative. They are ordered $\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0$.

The number of nonzero singular values equals the [rank](!/linear-algebra/matrix/rank) of $A$. This is the most numerically stable method for determining rank: compute the SVD and count singular values above a tolerance.

The largest singular value $\\sigma_1$ is the operator norm $\\|A\\|_2 = \\max_{\\|\\mathbf{x}\\|=1}\\|A\\mathbf{x}\\|$. The [Frobenius norm](!/linear-algebra/matrix/trace) is $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. The condition number is $\\kappa(A) = \\sigma_1/\\sigma_r$ — a large condition number means the matrix is nearly singular and small perturbations in the input cause large changes in the output.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Computing the SVD`,
    content: `The standard approach computes the SVD through the eigenvalue decomposition of $A^TA$.

Form $A^TA$ (symmetric, $n \\times n$). Find its eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$ and orthonormal eigenvectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_n$ using the [spectral decomposition](!/linear-algebra/decompositions/spectral). These are the right singular vectors: $V = [\\mathbf{v}_1 \\; \\cdots \\; \\mathbf{v}_n]$.

The singular values are $\\sigma_i = \\sqrt{\\lambda_i}$. The left singular vectors are computed from the right ones: $\\mathbf{u}_i = \\frac{1}{\\sigma_i}A\\mathbf{v}_i$ for each nonzero $\\sigma_i$. If $r < m$, extend $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ to an [orthonormal basis](!/linear-algebra/orthogonality/orthogonal-sets) for $\\mathbb{R}^m$.

## Worked Example

For $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \\end{pmatrix}$: $A^TA = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, eigenvalues $3$ and $1$, eigenvectors $\\frac{1}{\\sqrt{2}}(1, 1)^T$ and $\\frac{1}{\\sqrt{2}}(1, -1)^T$. Singular values: $\\sqrt{3}$ and $1$. Left singular vectors: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}A\\mathbf{v}_1 = \\frac{1}{\\sqrt{6}}(1, 1, 2)^T$, $\\mathbf{u}_2 = A\\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}(1, -1, 0)^T$. Extend with $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}(-1, -1, 1)^T$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Compact and Thin Forms`,
    content: `The full SVD has $U$ of size $m \\times m$, $\\Sigma$ of size $m \\times n$, and $V$ of size $n \\times n$. Two economical alternatives retain only the essential information.

The thin SVD keeps only the first $n$ columns of $U$ (call them $U_1$) and the top $n \\times n$ block of $\\Sigma$ (call it $\\Sigma_1$): $A = U_1 \\Sigma_1 V^T$. This drops the columns of $U$ corresponding to the [left null space](!/linear-algebra/vector-spaces/fundamental-spaces).

The compact SVD keeps only the first $r$ columns of $U$ and $V$ (where $r = \\text{rank}(A)$) and the $r \\times r$ diagonal block of nonzero singular values: $A = U_r \\Sigma_r V_r^T$. This is the most economical representation — it captures only the rank-$r$ content of $A$, discarding everything associated with zero singular values.

All three forms represent the same matrix $A$. The compact form uses the least storage; the full form provides bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `SVD and the Four Fundamental Subspaces`,
    content: `The SVD simultaneously provides orthonormal [bases](!/linear-algebra/vector-spaces) for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

The first $r$ columns of $V$ ($\\mathbf{v}_1, \\dots, \\mathbf{v}_r$) form an orthonormal basis for the row space of $A$.

The last $n - r$ columns of $V$ ($\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n$) form an orthonormal basis for the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

The first $r$ columns of $U$ ($\\mathbf{u}_1, \\dots, \\mathbf{u}_r$) form an orthonormal basis for the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$.

The last $m - r$ columns of $U$ ($\\mathbf{u}_{r+1}, \\dots, \\mathbf{u}_m$) form an orthonormal basis for the left null space of $A$.

No other factorization provides all four bases simultaneously, and no other method guarantees that these bases are orthonormal. The SVD is the complete structural portrait of any matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Pseudoinverse`,
    content: `The Moore-Penrose pseudoinverse $A^+$ is computed directly from the SVD:

$$A^+ = V\\Sigma^+ U^T$$

The matrix $\\Sigma^+$ is formed by reciprocating each nonzero singular value and transposing the shape: if $\\Sigma$ is $m \\times n$ with diagonal entries $\\sigma_1, \\dots, \\sigma_r, 0, \\dots, 0$, then $\\Sigma^+$ is $n \\times m$ with diagonal entries $1/\\sigma_1, \\dots, 1/\\sigma_r, 0, \\dots, 0$.

The pseudoinverse satisfies four defining properties: $AA^+A = A$, $A^+AA^+ = A^+$, $(AA^+)^T = AA^+$, $(A^+A)^T = A^+A$.

For a full-rank overdetermined system ($m > n$, rank $= n$), $A^+\\mathbf{b}$ gives the [least-squares](!/linear-algebra/orthogonality/least-squares) solution. For a rank-deficient system, $A^+\\mathbf{b}$ gives the minimum-norm least-squares solution — the solution of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Low-Rank Approximation`,
    content: `The best rank-$k$ approximation to $A$ in either the operator norm or the Frobenius norm is obtained by truncating the SVD at $k$ terms:

$$A_k = \\sigma_1\\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2\\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_k\\mathbf{u}_k\\mathbf{v}_k^T$$

This is the Eckart-Young-Mirsky theorem. Among all matrices of rank at most $k$, $A_k$ is the closest to $A$.

The approximation error is $\\|A - A_k\\|_2 = \\sigma_{k+1}$ (the first discarded singular value) in the operator norm, and $\\|A - A_k\\|_F = \\sqrt{\\sigma_{k+1}^2 + \\cdots + \\sigma_r^2}$ in the Frobenius norm.

When the singular values decay rapidly — $\\sigma_1 \\gg \\sigma_2 \\gg \\cdots$ — a small number of terms captures most of the matrix. This is the basis of image compression (store $k$ singular value triples instead of $mn$ entries), noise reduction (discard small singular values as noise), latent semantic analysis (retain the top-$k$ "concepts" in a document-term matrix), and dimensionality reduction more broadly.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `SVD and Norms`,
    content: `The singular values provide the complete "size profile" of a matrix.

The operator (spectral) norm is the largest singular value: $\\|A\\|_2 = \\sigma_1$. It measures the maximum factor by which $A$ can stretch a unit vector.

The [Frobenius norm](!/linear-algebra/matrix/trace) is the root-sum-of-squares of all singular values: $\\|A\\|_F = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}$. It measures the total "energy" in the matrix.

The condition number $\\kappa(A) = \\sigma_1/\\sigma_r$ quantifies sensitivity to perturbation. A matrix with $\\kappa = 10^k$ loses roughly $k$ digits of accuracy in solving $A\\mathbf{x} = \\mathbf{b}$ with floating-point arithmetic. A perfectly conditioned matrix ($\\kappa = 1$) is orthogonal. A singular matrix ($\\sigma_r = 0$) has $\\kappa = \\infty$.

The singular values are the natural measuring tool for matrices, just as eigenvalues are the natural measuring tool for symmetric matrices and [linear operators](!/linear-algebra/linear-transformations). For non-symmetric matrices, singular values (not eigenvalues) govern norms and conditioning.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `SVD and the Spectral Decomposition`,
    content: `For a symmetric positive semi-definite matrix $A$ with eigenvalues $\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0$, the [spectral decomposition](!/linear-algebra/decompositions/spectral) $A = QDQ^T$ is also the SVD: $U = V = Q$ and $\\Sigma = D$. The singular values are the eigenvalues.

For a general symmetric matrix with some negative eigenvalues, the singular values are $|\\lambda_i|$. The signs are absorbed into $U$ or $V$: if $\\lambda_i < 0$, one of the corresponding singular vectors is negated so that $\\sigma_i = |\\lambda_i| > 0$.

For non-symmetric or rectangular matrices, the eigendecomposition does not apply (it requires square matrices and may not exist even then), but the SVD always does. The SVD is the correct generalization of the spectral decomposition to the broadest possible class of matrices.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `The Outer Product Form`,
    content: `The SVD can be written as a sum of rank-one matrices:

$$A = \\sigma_1 \\mathbf{u}_1\\mathbf{v}_1^T + \\sigma_2 \\mathbf{u}_2\\mathbf{v}_2^T + \\cdots + \\sigma_r \\mathbf{u}_r\\mathbf{v}_r^T$$

Each term $\\sigma_i \\mathbf{u}_i\\mathbf{v}_i^T$ is an $m \\times n$ rank-one matrix. The singular value $\\sigma_i$ weights its contribution. The terms are ordered by importance: the first term captures the most of $A$ (in the norm sense), the second captures the most of the remainder, and so on.

Truncating this sum at $k$ terms gives the best rank-$k$ approximation $A_k$. The fraction of the Frobenius norm captured by the first $k$ terms is $(\\sigma_1^2 + \\cdots + \\sigma_k^2)/(\\sigma_1^2 + \\cdots + \\sigma_r^2)$.

This outer product perspective is the basis of nearly every matrix approximation method: keep the large singular values (signal) and discard the small ones (noise or redundancy).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj12: {
    title: `What the SVD Reveals`,
    content: `No other single factorization provides as much structural information about a matrix.

The [rank](!/linear-algebra/matrix/rank): the number of nonzero singular values.

The four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-spaces): orthonormal bases from the columns of $U$ and $V$.

The [pseudoinverse](!/linear-algebra/orthogonality/least-squares): $A^+ = V\\Sigma^+ U^T$.

The best rank-$k$ approximation: truncate at $k$ terms.

Norms and the condition number: directly from the singular values.

The [geometry](!/linear-algebra/linear-transformations/geometric-transformations) of the linear map: rotation, scaling, rotation.

For symmetric matrices, the SVD reduces to the [spectral decomposition](!/linear-algebra/decompositions/spectral). For invertible square matrices, the singular values reveal the conditioning that the [determinant](!/linear-algebra/determinants) alone cannot see (a matrix with $\\det = 1$ can still be poorly conditioned). For rectangular matrices, the SVD is the only factorization that applies without modification.

The SVD is the culmination of the decomposition hierarchy — the most general, most informative, and most broadly applicable factorization in linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
  title: `The Universal Matrix Factorization`,
  content: `The singular value decomposition factors any matrix of any shape as UΣVᵀ — two orthogonal matrices sandwiching a diagonal matrix of non-negative singular values. It exists for every matrix, reveals the rank, provides orthonormal bases for all four fundamental subspaces, computes the pseudoinverse, yields the best low-rank approximation, and decomposes every linear transformation into a rotation, a scaling, and another rotation. No other single factorization provides this much information.`,
}

const faqQuestions = {
  obj1: {
    question: "What is the singular value decomposition?",
    answer: "The SVD factors any m×n matrix A as A = UΣVᵀ, where U and V are orthogonal matrices of left and right singular vectors, and Σ is diagonal with non-negative singular values. It exists for every matrix regardless of shape, rank, or symmetry.",
    sectionId: "1"
  },
  obj2: {
    question: "What do singular values represent geometrically?",
    answer: "Singular values measure how much a matrix stretches vectors along each orthogonal direction. The largest singular value σ₁ is the maximum stretching factor, and the transformation A decomposes geometrically into a rotation (Vᵀ), a coordinate-axis scaling (Σ), and another rotation (U).",
    sectionId: "2"
  },
  obj3: {
    question: "How does SVD give the best low-rank approximation?",
    answer: "The Eckart-Young-Mirsky theorem states that truncating the SVD at k terms gives the closest rank-k matrix to A in both operator and Frobenius norms. The approximation error equals σₖ₊₁ in operator norm. This is the basis of image compression and noise reduction.",
    sectionId: "8"
  },
  obj4: {
    question: "How is the pseudoinverse computed from the SVD?",
    answer: "The Moore-Penrose pseudoinverse is A⁺ = VΣ⁺Uᵀ, where Σ⁺ reciprocates each nonzero singular value and transposes the shape. For overdetermined systems A⁺b gives the least-squares solution; for rank-deficient systems it gives the minimum-norm least-squares solution.",
    sectionId: "7"
  },
  obj5: {
    question: "How does SVD reveal the four fundamental subspaces?",
    answer: "The first r columns of V span the row space, the remaining n−r columns span the null space. The first r columns of U span the column space, the remaining m−r columns span the left null space. No other factorization provides orthonormal bases for all four subspaces simultaneously.",
    sectionId: "6"
  },
  obj6: {
    question: "What is the condition number of a matrix?",
    answer: "The condition number κ(A) = σ₁/σᵣ is the ratio of the largest to smallest nonzero singular value. It measures sensitivity to perturbation: a matrix with κ = 10ᵏ loses roughly k digits of accuracy in floating-point computation. Orthogonal matrices have κ = 1; singular matrices have κ = ∞.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Singular Value Decomposition (SVD)",
    "description": "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
    "url": "https://www.learnmathclass.com/linear-algebra/decompositions/svd",
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
      "name": "Singular Value Decomposition"
    },
    "teaches": [
      "SVD factorization A = UΣVᵀ for any matrix",
      "Geometric interpretation as rotation-scaling-rotation",
      "Singular values from eigenvalues of AᵀA",
      "Four fundamental subspaces from U and V",
      "Moore-Penrose pseudoinverse via SVD",
      "Best low-rank approximation (Eckart-Young theorem)",
      "Matrix norms and condition number from singular values",
      "Outer product form and relationship to spectral decomposition"
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
        "name": "Singular Value Decomposition",
        "item": "https://www.learnmathclass.com/linear-algebra/decompositions/svd"
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
  //       url: "/linear-algebra/decompositions/svd",
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
      title: "SVD: Singular Value Decomposition | Learn Math Class",
      description: "Singular value decomposition A = UΣVᵀ: singular values, geometric interpretation, pseudoinverse, low-rank approximation, four fundamental subspaces, norms, and condition number.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/decompositions/svd",
      name: "Singular Value Decomposition (SVD)"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
export default function SVDPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>SVD Decompositions</h1>
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
