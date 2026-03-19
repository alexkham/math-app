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
    title: `What QR Decomposition Is`,
    content: `An $m \\times n$ [matrix](!/linear-algebra/matrix) $A$ with $m \\geq n$ and [linearly independent](!/linear-algebra/vector-spaces/linear-independence) columns factors as

$$A = QR$$

where $Q$ is $m \\times n$ with [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) columns and $R$ is $n \\times n$ upper [triangular](!/linear-algebra/matrix/types) with positive diagonal entries.

The columns of $Q$ form an orthonormal [basis](!/linear-algebra/vector-spaces) for the column space of $A$. The matrix $R$ stores the coefficients: each column of $A$ is a linear combination of the columns of $Q$ with weights given by the corresponding column of $R$. The upper triangular structure of $R$ reflects the sequential nature of the orthogonalization — each column depends only on the columns that came before it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `QR via Gram-Schmidt`,
    content: `Applying the [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) to the columns $\\mathbf{a}_1, \\dots, \\mathbf{a}_n$ of $A$ produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$. These become the columns of $Q$.

The entries of $R$ are the dot products computed during Gram-Schmidt: $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ for $i \\leq j$, and $R_{ij} = 0$ for $i > j$. Each column of $A$ decomposes as

$$\\mathbf{a}_j = R_{1j}\\mathbf{q}_1 + R_{2j}\\mathbf{q}_2 + \\cdots + R_{jj}\\mathbf{q}_j$$

The entry $R_{jj} = \\|\\mathbf{u}_j\\|$ (the norm of the $j$-th orthogonal vector before normalization) is always positive, which makes $R$ unique.

## Worked Example

For $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$: Gram-Schmidt on the two columns gives $\\mathbf{q}_1 = \\frac{1}{\\sqrt{2}}(1, 0, 1)^T$ and $\\mathbf{q}_2 = \\frac{1}{\\sqrt{6}}(1, 2, -1)^T$. Then $R = \\begin{pmatrix} \\sqrt{2} & 1/\\sqrt{2} \\\\ 0 & 3/\\sqrt{6} \\end{pmatrix}$ and $A = QR$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `QR via Householder Reflections`,
    content: `A Householder reflection is an [orthogonal](!/linear-algebra/matrix/types) matrix $H = I - 2\\mathbf{v}\\mathbf{v}^T/(\\mathbf{v}^T\\mathbf{v})$ that reflects $\\mathbb{R}^m$ across the hyperplane perpendicular to $\\mathbf{v}$. By choosing $\\mathbf{v}$ appropriately, a single Householder reflection zeros out all entries below the pivot in one column.

Applying Householder reflections sequentially — one per column — produces $H_n \\cdots H_2 H_1 A = R$. Since each $H_i$ is orthogonal, $Q = H_1 H_2 \\cdots H_n$ is orthogonal, giving $A = QR$.

Householder QR is more numerically stable than Gram-Schmidt. It achieves backward stability — the computed factors $Q$ and $R$ satisfy $QR = A + E$ where $\\|E\\|$ is on the order of machine precision times $\\|A\\|$. This makes Householder QR the standard algorithm in numerical libraries.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Thin QR vs. Full QR`,
    content: `The thin (reduced) QR factorization has $Q_1$ of size $m \\times n$ with orthonormal columns and $R_1$ of size $n \\times n$ upper triangular: $A = Q_1 R_1$. This is the version produced by Gram-Schmidt and is sufficient for most applications.

The full QR factorization extends $Q_1$ to a square $m \\times m$ orthogonal matrix $Q$ by appending $m - n$ columns forming an orthonormal basis for $\\text{Col}(A)^\\perp$. The factor $R$ is extended to $m \\times n$ by appending $m - n$ rows of zeros: $A = QR$.

The full version is needed when the [orthogonal complement](!/linear-algebra/orthogonality) of the column space is required — for instance, when extracting a basis for the [left null space](!/linear-algebra/vector-spaces/fundamental-subspaces). The thin version is more economical for system solving and [least squares](!/linear-algebra/orthogonality/least-squares).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Existence and Uniqueness`,
    content: `Every $m \\times n$ matrix with $m \\geq n$ and linearly independent columns has a thin QR factorization. Every $m \\times n$ matrix (regardless of rank) has a full QR factorization.

The thin QR factorization with positive diagonal entries on $R$ is unique. If negative diagonal entries are permitted, the factorization is not unique — signs can be redistributed between $Q$ and $R$ (multiplying a column of $Q$ by $-1$ and the corresponding row of $R$ by $-1$ preserves the product). The convention of positive diagonal entries on $R$ resolves this ambiguity.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Solving Least Squares with QR`,
    content: `The [normal equations](!/linear-algebra/orthogonality/least-squares) $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ transform under $A = QR$. Since $A^TA = R^TQ^TQR = R^TR$ and $A^T\\mathbf{b} = R^TQ^T\\mathbf{b}$, the normal equations become $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Canceling $R^T$ (invertible because $R$ has positive diagonal):

$$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

The right-hand side $Q^T\\mathbf{b}$ is computed by $n$ [dot products](!/linear-algebra/vectors/dot-product). The system $R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$ is upper triangular, solved by back substitution in $O(n^2)$ operations.

The critical advantage over the normal equations is numerical. Forming $A^TA$ squares the [condition number](!/linear-algebra/matrix/rank): $\\kappa(A^TA) = \\kappa(A)^2$. If $A$ has condition number $10^6$, the normal equations work with condition number $10^{12}$, losing $12$ digits of accuracy in double precision. QR avoids this squaring and works with the original condition number $10^6$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The QR Algorithm for Eigenvalues`,
    content: `The QR algorithm is the standard method for computing [eigenvalues](!/linear-algebra/eigenvalues-vectors) of general (non-[symmetric](!/linear-algebra/matrix/types)) matrices. It proceeds iteratively:

Set $A_0 = A$. At each step, compute the QR factorization $A_k = Q_k R_k$, then form $A_{k+1} = R_k Q_k$.

Under mild conditions, $A_k$ converges to an upper triangular matrix with the eigenvalues on the diagonal. The convergence is driven by the fact that $A_{k+1} = Q_k^T A_k Q_k$ — each iteration is a [similarity](!/linear-algebra/linear-transformations/basis-change) transformation that preserves the eigenvalues while driving the sub-diagonal entries toward zero.

With shifts (replacing $A_k$ by $A_k - \\sigma_k I$ before factoring and adding $\\sigma_k I$ back), convergence accelerates dramatically — cubic convergence for symmetric matrices with the Wilkinson shift. The QR algorithm computes eigenvalues without ever forming the [characteristic polynomial](!/linear-algebra/eigenvalues-vectors/characteristic-equation), avoiding the severe numerical instability of polynomial root-finding.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Properties of the Factors`,
    content: `The orthonormality of $Q$'s columns ($Q^TQ = I_n$) has several immediate consequences.

The matrix $QQ^T$ is the [projection](!/linear-algebra/orthogonality/projections) matrix onto $\\text{Col}(A)$. For any $\\mathbf{b}$, $QQ^T\\mathbf{b}$ is the orthogonal projection of $\\mathbf{b}$ onto the column space.

Orthogonal multiplication preserves norms: $\\|A\\mathbf{x}\\| = \\|QR\\mathbf{x}\\| = \\|R\\mathbf{x}\\|$, since $\\|Q\\mathbf{y}\\| = \\|\\mathbf{y}\\|$ for any $\\mathbf{y}$. This means $R$ captures all the "size" information of $A$ — the orthogonal factor contributes nothing to stretching or compressing.

$R$ is invertible when $A$ has full column rank (the diagonal entries are the norms of the Gram-Schmidt vectors, all positive). The [singular values](!/linear-algebra/decompositions/svd) of $A$ equal the singular values of $R$, since the orthogonal factor does not affect them.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Gram-Schmidt vs. Householder`,
    content: `Classical Gram-Schmidt can lose orthogonality in floating-point arithmetic when the columns of $A$ are nearly [dependent](!/linear-algebra/vector-spaces/linear-independence). The computed $\\mathbf{q}_i$'s may fail to be perpendicular to machine precision, and the errors accumulate with each step.

Modified Gram-Schmidt improves stability by updating the remaining vectors in place after each [projection](!/linear-algebra/orthogonality/projections) subtraction, rather than using the original columns throughout. The mathematical result is identical in exact arithmetic, but the numerical behavior is significantly better.

Householder reflections provide the strongest stability guarantee. Each reflection zeros an entire column below the diagonal in a single, orthogonally-implemented step. The resulting QR factorization is backward stable — the gold standard in numerical linear algebra.

Givens rotations offer a third option, zeroing entries one at a time via plane rotations. They are preferred for sparse matrices, where surgically placed zeros can be introduced without disturbing the existing sparsity structure.

In practice, Householder is the default for dense matrices, Givens for sparse ones, and Gram-Schmidt (modified) for situations where the orthogonal factor $Q$ is needed explicitly rather than implicitly.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `QR and Gram-Schmidt: The Connection`,
    content: `The [Gram-Schmidt process](!/linear-algebra/orthogonality/gram-schmidt) and the QR decomposition are two descriptions of the same computation.

Gram-Schmidt takes the columns of $A$ and produces orthonormal vectors $\\mathbf{q}_1, \\dots, \\mathbf{q}_n$ while recording the coefficients $R_{ij} = \\mathbf{q}_i \\cdot \\mathbf{a}_j$ along the way. Assembling these into matrices gives $A = QR$.

Conversely, given $A = QR$, the columns of $Q$ are exactly what Gram-Schmidt would produce, and $R$ stores exactly the dot products Gram-Schmidt would compute. The factorization is the matrix-level summary of the vector-level algorithm.

This duality means every theorem about QR has an interpretation in terms of Gram-Schmidt, and vice versa. The QR decomposition is Gram-Schmidt made systematic, portable, and computable in a single matrix equation.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `Orthogonal Times Triangular`,
  content: `The QR decomposition factors a matrix into an orthogonal factor Q and an upper triangular factor R. It is the matrix form of the Gram-Schmidt process, the standard method for least-squares computation, and the foundation of the most widely used eigenvalue algorithm. The orthogonal factor preserves lengths and condition numbers, making QR the numerically safest of the triangular factorizations.`,
}



   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/url",
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
