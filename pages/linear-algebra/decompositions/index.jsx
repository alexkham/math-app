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

  const keyWords=['','','','','']

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
    title: `What a Decomposition Is`,
    content: `A matrix decomposition (or factorization) expresses a [matrix](!/linear-algebra/matrix) $A$ as a product of two or more matrices with known, exploitable structure. The factors are typically [triangular](!/linear-algebra/matrix/types), [diagonal](!/linear-algebra/matrix/types), or [orthogonal](!/linear-algebra/matrix/types) — matrices for which solving systems, computing [determinants](!/linear-algebra/determinants), and extracting [eigenvalues](!/linear-algebra/eigenvalues-vectors) are either trivial or dramatically simplified.

A decomposition does not change the matrix. It reveals the internal structure of $A$ by splitting it into interpretable components. The product of the factors always reproduces $A$ exactly — the information is rearranged, not altered.

Every decomposition represents a trade: an upfront cost to compute the factors, followed by cheap operations that use them. The factorization is done once; the payoff is reaped every time the factors are applied.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Why Decompositions Matter`,
    content: `Decompositions transform hard problems into sequences of easy ones.

Solving [linear systems](!/linear-algebra/linear-systems): the [LU decomposition](!/linear-algebra/decompositions/lu) converts a single factorization into cheap triangular solves for any number of right-hand sides. The [Cholesky decomposition](!/linear-algebra/decompositions/cholesky) does the same at half the cost when the matrix is symmetric positive definite.

[Least squares](!/linear-algebra/orthogonality/least-squares): the [QR decomposition](!/linear-algebra/decompositions/qr) avoids squaring the condition number, providing a numerically stable solution to overdetermined systems.

Eigenvalue computation: the QR algorithm — an iterative process built on repeated QR factorizations — is the standard method for finding eigenvalues of general matrices, entirely avoiding the characteristic polynomial.

Dimensionality reduction: the [singular value decomposition](!/linear-algebra/decompositions/svd) identifies the most important directions in the data and discards the rest, enabling compression, noise removal, and low-rank approximation.

Numerical stability: orthogonal factors ($Q$ in QR, $U$ and $V$ in SVD) preserve lengths and condition numbers, keeping rounding errors under control throughout the computation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `LU Decomposition`,
    content: `The [LU decomposition](!/linear-algebra/decompositions/lu) factors a square matrix as $A = LU$ (or $PA = LU$ with row pivoting), where $L$ is lower triangular and $U$ is upper triangular. It captures the entire process of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) in matrix form: $U$ is the [echelon form](!/linear-algebra/linear-systems/echelon-form), and $L$ stores the multipliers used during elimination.

Solving $A\\mathbf{x} = \\mathbf{b}$ reduces to two triangular substitutions — forward ($L\\mathbf{y} = \\mathbf{b}$) then backward ($U\\mathbf{x} = \\mathbf{y}$) — each costing $O(n^2)$. The factorization itself costs $\\frac{2}{3}n^3$, but each additional right-hand side costs only $O(n^2)$. For $k$ systems sharing the same coefficient matrix, LU amortizes the dominant cost over all $k$ solves.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `QR Decomposition`,
    content: `The [QR decomposition](!/linear-algebra/decompositions/qr) factors an $m \\times n$ matrix as $A = QR$, where $Q$ has [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is upper triangular. It is produced by the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt), by Householder reflections, or by Givens rotations.

QR is the standard method for least-squares problems: the normal equations $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ simplify to the triangular system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$, avoiding the condition-number-squaring that comes from forming $A^TA$ directly.

The QR algorithm for eigenvalues — an iterative scheme that repeatedly factors and recombines — converges to the eigenvalues of a general matrix without computing the [characteristic polynomial](!/linear-algebra/eigenvalues-vectors/characteristic-equation). It is the dominant eigenvalue algorithm in numerical software.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Cholesky Decomposition`,
    content: `The [Cholesky decomposition](!/linear-algebra/decompositions/cholesky) factors a [symmetric](!/linear-algebra/matrix/types) positive definite matrix as $A = LL^T$, where $L$ is lower triangular with positive diagonal entries. It exists if and only if $A$ is symmetric positive definite — all [eigenvalues](!/linear-algebra/eigenvalues-vectors) strictly positive and $A = A^T$.

Cholesky exploits symmetry to achieve half the cost of LU: $\\frac{1}{3}n^3$ versus $\\frac{2}{3}n^3$. Only the lower triangle of $A$ is read, and only $L$ is computed — the upper factor $L^T$ is just the transpose.

Cholesky requires no pivoting. Positive definiteness guarantees that every diagonal entry encountered during the algorithm is strictly positive, so no zero pivots can occur. If the algorithm breaks down (a non-positive value under the square root), the matrix is not positive definite — the decomposition doubles as a definiteness test.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Spectral Decomposition`,
    content: `The [spectral decomposition](!/linear-algebra/decompositions/spectral) factors a real symmetric matrix as $A = QDQ^T$, where $Q$ is [orthogonal](!/linear-algebra/matrix/types) and $D$ is diagonal. This is the [diagonalization](!/linear-algebra/eigenvalues-vectors/diagonalization) of a symmetric matrix, with the additional guarantee that the diagonalizing matrix $Q$ is orthogonal — not merely [invertible](!/linear-algebra/matrix/inverse).

In outer product form, $A = \\lambda_1 \\mathbf{q}_1\\mathbf{q}_1^T + \\lambda_2 \\mathbf{q}_2\\mathbf{q}_2^T + \\cdots + \\lambda_n \\mathbf{q}_n\\mathbf{q}_n^T$. Each term is the eigenvalue times the [projection](!/linear-algebra/orthogonality/projections) matrix onto the corresponding eigenvector direction. The matrix is decomposed into a sum of independent rank-one projections, weighted by eigenvalues.

The spectral decomposition is the foundation of quadratic form analysis, principal component analysis, and the classification of symmetric matrices as positive definite, positive semi-definite, or indefinite.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Singular Value Decomposition`,
    content: `The [singular value decomposition](!/linear-algebra/decompositions/svd) factors any $m \\times n$ matrix as $A = U\\Sigma V^T$, where $U$ and $V$ are orthogonal and $\\Sigma$ is diagonal with non-negative entries (the singular values). It exists for every matrix of every shape and every [rank](!/linear-algebra/matrix/rank).

The SVD is the most informative factorization in linear algebra. The number of nonzero singular values equals the rank. The columns of $U$ and $V$ provide orthonormal bases for all four [fundamental subspaces](!/linear-algebra/vector-spaces/fundamental-subspaces). The pseudoinverse is $A^+ = V\\Sigma^+ U^T$. The best rank-$k$ approximation to $A$ is obtained by truncating the SVD at $k$ terms. The [condition number](!/linear-algebra/matrix/rank) is $\\sigma_1/\\sigma_r$.

Geometrically, every [linear transformation](!/linear-algebra/linear-transformations) is a rotation ($V^T$), followed by a coordinate-axis scaling ($\\Sigma$), followed by another rotation ($U$). The SVD makes this decomposition explicit.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Choosing the Right Decomposition`,
    content: `The choice of decomposition depends on the matrix structure and the question being asked.

For a square invertible system with one or many right-hand sides, LU is the standard choice — factor once, solve cheaply. For a symmetric positive definite system, Cholesky is faster and more stable. For a [least-squares](!/linear-algebra/orthogonality/least-squares) problem or an overdetermined system, QR avoids condition-number issues. For [eigenvalues](!/linear-algebra/eigenvalues-vectors) of a symmetric matrix, the spectral decomposition gives real eigenvalues and orthogonal eigenvectors. For rank determination, the pseudoinverse, low-rank approximation, or any problem where the matrix may be rectangular or rank-deficient, the SVD is the universal tool.

More specialized decompositions exist for more specialized structures. Banded matrices have banded LU factors. Sparse matrices benefit from fill-reducing permutations. Iterative methods (Krylov subspace methods) avoid explicit factorization entirely for very large systems. But the five decompositions on this page cover the vast majority of problems encountered in a standard linear algebra course and in applied work.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Relationships Between Decompositions`,
    content: `The five decompositions are not independent — each can be viewed as a refinement or generalization of another.

LU is [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) recorded as a matrix product. QR is [Gram-Schmidt](!/linear-algebra/orthogonality/gram-schmidt) recorded as a matrix product. Cholesky is the symmetric-positive-definite specialization of LU: when $A = A^T$ with positive eigenvalues, the factorization $A = LDL^T$ compresses into $A = LL^T$ by absorbing $\\sqrt{D}$ into $L$.

The spectral decomposition is eigendecomposition restricted to symmetric matrices, where the eigenvector matrix is guaranteed to be orthogonal. The SVD generalizes the spectral decomposition to non-symmetric and non-square matrices: for a symmetric positive semi-definite matrix, the SVD and spectral decomposition coincide.

Each decomposition occupies a specific niche — defined by the matrix structure it requires and the information it provides — but they are all connected through the common themes of triangularity, orthogonality, and diagonality.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `Factoring Matrices into Simpler Pieces`,
  content: `A matrix decomposition writes a matrix as a product of simpler matrices — triangular, diagonal, orthogonal, or some combination — whose structure makes subsequent computation cheap. The upfront cost of factoring is repaid every time the factors are used to solve a system, compute eigenvalues, approximate data, or analyze stability. Decompositions are the computational backbone of applied linear algebra.`,
}



   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/decompositions",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
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
